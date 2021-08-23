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
          description: "Using React, Redux, Spring Boot, PostgreSQL to build online project management tools for small to medium size company users.",
        },
        {
          key: "1",
          title: "Full Stack Developer",
          year: "Sep 2020",
          company: "JR Academy",
          description: "Using React, Redux-saga, ES6+, TypeScript, UmiJS, Ant Design, KeystoneJS, Node to build websites, online management systems.",
        },
        {
          key: "2",
          title: "Software Engineer",
          year: "Jun 2011 - 2015",
          company: "Neusoft Corporation",
          description:
            "Providing enterprise software as a service in banking and educational industries by using J2EE, Vanilla Javascript, DB2, Oracle etc.",
        },
      ]}
    />
  </div>
);

export default Experience;
