const Experience = (props) => {
  return (
    <>
      <h2>
        {props.type} Role - Time {props.number}
      </h2>
      <h3>Employer</h3>
      <p className="description">Description</p>
      <p className="project">Project</p>
    </>
  );
};

const ExperienceList = (props) => {
  let list = [];
  for (let i = 0; i < props.number; i++) {
    list.push(
      <>
        <Experience type={props.type} number={i + 1} />
      </>
    );
  }
  return list;
};

export const Header = () => {
  return (
    <header>
      <div className="name">Aron Kuch</div>
      <div className="contact">Contact Info Stuff</div>
    </header>
  );
};

export const Work = () => {
  return (
    <>
      <h1>Work Experience</h1>
      <ExperienceList type="Work" number="5" />
    </>
  );
};

export const Nonwork = () => {
  return (
    <>
      <h1>Other Experience</h1>
      <ExperienceList type="Nonwork" number="2" />
      <ExperienceList type="Education" number="2" />
    </>
  );
};
