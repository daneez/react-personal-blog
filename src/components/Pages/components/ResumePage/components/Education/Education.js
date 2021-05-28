import Timeline from "../Timeline/Timeline";

const Education = () => (
  <div>
    <h3 className="resumeSub__title">Education</h3>
    <Timeline
      items={[
        {
          key: "0",
          title: "",
          year: "2020",
          company: "Udemy",
          description: "The MERN Stack, The MEAN Stack ...",
        },
        {
          key: "1",
          title: "Master of IT",
          year: "2018",
          company: "University of Melbourne",
          description:
            "Programming and Software Development, Database Systems & Information Modelling ...",
        },
        {
          key: "2",
          title: "Bachelor of Engineering",
          year: "2011",
          company: "Minzu University of China",
          description: "Computer Science & Information Technology",
        },
      ]}
    />
  </div>
);

export default Education;
