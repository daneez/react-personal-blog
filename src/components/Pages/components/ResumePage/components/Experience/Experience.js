import Timeline from "../Timeline/Timeline";

const Experience = () => (
  <div>
    <h3 className="resumeSub__title">Experience</h3>
    <Timeline
      items={[
        {
          key: "0",
          title: "Full Stack Developer",
          year: "May 2021",
          company: "Async Working",
          description: "Using React, Redux, Spring Boot, PostgreSQL to build online working management tool for small to medium size company online users.",
        },
        {
          key: "1",
          title: "Full Stack Developer",
          year: "Jan 2021",
          company: "Melbrisade",
          description:
            "Using React Hook, Spring Boot, PostgreSQL to build CRM system for small to medium size business owners.",
        },
        {
          key: "2",
          title: "Full Stack Developer",
          year: "Sep 2020",
          company: "JR Academy",
          description: "Using React, Redux-saga, ES6+, TypeScript, UmiJS, Ant Design, KeystoneJS, Node to build websites, online management systems.",
        },
      ]}
    />
  </div>
);

export default Experience;
