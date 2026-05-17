import React, { useEffect, useMemo, useRef, useState } from 'react';
import ChatBot from 'react-simple-chatbot';
import { useTranslation } from 'react-i18next';

const Greeting = ({ lang }) => (
  <div className="chatbot-greeting">
    {lang === 'th'
      ? 'สวัสดีค่ะ! ต้องการสอบถามข้อมูลอะไรเกี่ยวกับเจ้าของเว็บนี้?'
      : 'Hello! What would you like to know about the owner of this website?'}
  </div>
);

// ใช้ component แสดงปุ่มเอง เพื่อหลีกเลี่ยง bug options ซ้ำใน react-simple-chatbot
const OptionButtons = ({ lang, triggerNextStep }) => {
  const opts = [
    { value: 'name', label: lang === 'th' ? 'ชื่ออะไร' : 'What is your name?', trigger: 'name' },
    { value: 'job', label: lang === 'th' ? 'ตำแหน่งงาน' : 'Job Title', trigger: 'job' },
    { value: 'contact', label: lang === 'th' ? 'ติดต่อ' : 'Contact', trigger: 'contact' },
    { value: 'edu', label: lang === 'th' ? 'ประวัติการศึกษา' : 'Education', trigger: 'edu' },
    { value: 'work', label: lang === 'th' ? 'ประสบการณ์ทำงาน' : 'Work Experience', trigger: 'work' },
    { value: 'address', label: lang === 'th' ? 'ที่อยู่' : 'Address', trigger: 'address' },
    { value: 'skill', label: lang === 'th' ? 'ทักษะ' : 'Skills', trigger: 'skill' },
  ];

  const handleClick = (next) => {
    // ใช้ triggerNextStep เพื่อไปยัง step ถัดไปแบบไม่ซ้ำ
    triggerNextStep({ value: next.value, trigger: next.trigger });
  };

  return (
    <div className="chatbot-options-grid">
      {opts.map((o) => (
        <button
          key={o.value}
          className="chatbot-option-btn"
          onClick={() => handleClick(o)}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
};

const getSteps = (t, lang) => [
  {
    id: 'greet',
    message: lang === 'th'
      ? 'สวัสดีค่ะ! ต้องการสอบถามข้อมูลอะไรเกี่ยวกับเจ้าของเว็บนี้?'
      : 'Hello! What would you like to know about the owner of this website?',
    trigger: 'ask',
  },
  {
    id: 'ask',
    component: <OptionButtons lang={lang} />, // ใช้ component แทน options array เพื่อกันการซ้ำ
    waitAction: true,
    hideInput: true,
  },
  { id: 'name', message: t('head.name'), trigger: 'ask' },
  { id: 'job', message: t('head.job'), trigger: 'ask' },
  {
    id: 'contact',
    message:
      (lang === 'th'
        ? `อีเมล: ${t('head.email')}, โทร: ${t('head.phone')}, Line: ${t('head.line')}`
        : `Email: ${t('head.email')}, Phone: ${t('head.phone')}, Line: ${t('head.line')}`),
    trigger: 'ask',
  },
  {
    id: 'edu',
    message: `${t('StudyHis.Bachelor')}, ${t('StudyHis.SchoolBachelor')}`,
    trigger: 'ask',
  },
  {
    id: 'work',
    message:
      lang === 'th'
        ? `ปัจจุบัน: ${t('WorkEx.Company1')} (${t('WorkEx.Position1')}) ตั้งแต่ ${t('WorkEx.Year1')}`
        : `Current: ${t('WorkEx.Company1')} (${t('WorkEx.Position1')}) since ${t('WorkEx.Year1')}`,
    trigger: 'ask',
  },
  {
    id: 'address',
    message: t('Personal.addReal'),
    trigger: 'ask',
  },
  {
    id: 'skill',
    message:
      lang === 'th'
        ? 'Java, JSP, Spring Boot, JavaScript, React, Python, ฯลฯ'
        : 'Java, JSP, Spring Boot, JavaScript, React, Python, etc.',
    trigger: 'ask',
  },
];

const Chatbot = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  const steps = useMemo(() => getSteps(t, lang), [t, lang]);
  const [open, setOpen] = useState(false);
  const shellRef = useRef(null);

  const toggle = () => setOpen((v) => !v);

  // เลื่อนลงล่างสุดทุกครั้งที่มีข้อความใหม่ในแชต (ใช้ MutationObserver จับ DOM เปลี่ยนแปลง)
  useEffect(() => {
    if (!open) return undefined;
    const container = shellRef.current?.querySelector('.rsc-content');
    if (!container) return undefined;

    const scrollToBottom = () => {
      container.scrollTop = container.scrollHeight;
    };

    scrollToBottom();

    const observer = new MutationObserver(scrollToBottom);
    observer.observe(container, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [open, steps]);
  return (
    <div className="chatbot-container">
      {!open && (
        <button type="button" className="chatbot-launcher" onClick={toggle}>
          {lang === 'th' ? 'เปิดแชต' : 'Open Chat'}
        </button>
      )}
      {open && (
        <div className="chatbot-panel" ref={shellRef}>
          <button
            type="button"
            className="chatbot-close"
            onClick={toggle}
            aria-label={lang === 'th' ? 'ปิดแชต' : 'Close chat'}
          >
            X
          </button>
          <ChatBot
            steps={steps}
            headerTitle={t('chatbotTitle')}
            stepsStartAt={0}
            botAvatar={`${import.meta.env.BASE_URL}IMG/Moonsan.png`}
          />
        </div>
      )}
    </div>
  );
};

export default Chatbot;
