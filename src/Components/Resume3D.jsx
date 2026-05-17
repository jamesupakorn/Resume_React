import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';

const resumeData = {
  name: 'ศุภกร แรงกสิวิทย์',
  job: 'Sr. Programmer / Full Stack Developer',
  contact: {
    phone: '093-772-0044',
    email: 'jamesupakorn@hotmail.com',
    line: '@manofmoon',
    website: 'jamesupakorn.github.io/Resume_React',
  },
  profile: 'โปรแกรมเมอร์ผู้มีประสบการณ์มากกว่า 5 ปี เชี่ยวชาญด้านการพัฒนาโปรแกรมทั้งในส่วน Backend และ Frontend ด้วยภาษา Java, JSP (JavaServer Pages) และ Spring Boot ด้วยความชื่นชอบในการเขียนโค้ดมาตั้งแต่สมัยเรียน ทำให้ผลงานที่ออกมามีคุณภาพและมีประสิทธิภาพสูง มีผลงานโดดเด่นในการพัฒนาโปรเจกต์ที่ซับซ้อน เช่น ระบบจัดการข้อมูลทางการแพทย์และระบบบริหารทรัพยากรบุคคล พร้อมทั้งมีความสามารถในการให้คำปรึกษาและแก้ไขปัญหาให้กับทีมได้อย่างมีประสิทธิภาพ',
  skills: {
    expert: ['Java', 'JSP (JavaServer Pages)', 'JavaScript', 'HTML5', 'CSS', 'Bootstrap'],
    intermediate: ['Spring Boot', 'C#/.NET Framework', 'React'],
    basic: ['Python', 'NET Core MVC', 'AngularJS', 'React Native'],
    database: ['SQL', 'MySQL', 'PostgreSQL', 'Oracle'],
    tools: ['Git', 'Adobe Photoshop', 'Adobe Illustrator'],
  },
  education: [
    { degree: 'ปริญญาตรี', year: '2559-2561', field: 'สาขาระบบสารสนเทศ', school: 'มหาวิทยาลัยเทคโนโลยีราชมงคลพระนคร' },
    { degree: 'ปวส.', year: '2557-2559', field: 'สาขาวิชาคอมพิวเตอร์ธุรกิจ', school: 'วิทยาลัยพณิชยการธนบุรี' },
    { degree: 'ปวช.', year: '2554-2557', field: 'สาขาวิชาคอมพิวเตอร์ธุรกิจ', school: 'วิทยาลัยพณิชยการธนบุรี' },
    { degree: 'มัธยมศึกษาตอนต้น', year: '2551-2554', field: '', school: 'โรงเรียนโพธิสารพิทยากร' },
  ],
};

function Resume3D() {
  return (
    <Canvas camera={{ position: [0, 0, 12], fov: 50 }} className="resume3d-canvas">
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <OrbitControls />
      <Text position={[0, 3, 0]} fontSize={0.6} color="navy" anchorX="center" anchorY="middle">
        {resumeData.name}
      </Text>
      <Text position={[0, 2.2, 0]} fontSize={0.35} color="darkslateblue" anchorX="center" anchorY="middle">
        {resumeData.job}
      </Text>
      <Text position={[-3.5, 1.2, 0]} fontSize={0.22} color="black" maxWidth={4}>
        โทร: {resumeData.contact.phone}
      </Text>
      <Text position={[-3.5, 0.8, 0]} fontSize={0.22} color="black" maxWidth={4}>
        อีเมล: {resumeData.contact.email}
      </Text>
      <Text position={[-3.5, 0.4, 0]} fontSize={0.22} color="black" maxWidth={4}>
        Line: {resumeData.contact.line}
      </Text>
      <Text position={[-3.5, 0, 0]} fontSize={0.22} color="black" maxWidth={4}>
        ผลงาน: {resumeData.contact.website}
      </Text>
      <Text position={[2.5, 1, 0]} fontSize={0.21} color="#444" maxWidth={5}>
        {resumeData.profile}
      </Text>
      <Text position={[-3.5, -0.8, 0]} fontSize={0.23} color="teal" maxWidth={4}>
        ทักษะเชี่ยวชาญ:\n- {resumeData.skills.expert.join("\n- ")}
      </Text>
      <Text position={[-3.5, -1.4, 0]} fontSize={0.21} color="teal" maxWidth={4}>
        ระดับกลาง: {resumeData.skills.intermediate.join(", ")}
      </Text>
      <Text position={[-3.5, -1.8, 0]} fontSize={0.21} color="teal" maxWidth={4}>
        พื้นฐาน: {resumeData.skills.basic.join(", ")}
      </Text>
      <Text position={[-3.5, -2.2, 0]} fontSize={0.21} color="teal" maxWidth={4}>
        ฐานข้อมูล: {resumeData.skills.database.join(", ")}
      </Text>
      <Text position={[-3.5, -2.6, 0]} fontSize={0.21} color="teal" maxWidth={4}>
        เครื่องมือ: {resumeData.skills.tools.join(", ")}
      </Text>
      <Text position={[2.5, -0.8, 0]} fontSize={0.22} color="#2d5" maxWidth={5}>
        การศึกษา:\n{resumeData.education.map(e => `${e.degree} (${e.year}): ${e.field ? e.field + ' | ' : ''}${e.school}`).join("\n")}
      </Text>
    </Canvas>
  );
}

export default Resume3D;
