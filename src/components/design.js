const Experience = (props) => {
  return (
    <div className="experince">
      <h2>
        {props.type} Role - Time {props.number}
      </h2>
      <h3>Employer</h3>
      <p className="description">Description</p>
      <p className="project">Project</p>
    </div>
  );
};

const ExperienceList = (props) => {
  let list = [];
  for (let i = 1; i <= props.number; i++) {
    list.push(
      <>
        <Experience type={props.type} number={i} />
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
    <div className="work">
      <h1>Work Experience</h1>
      <ExperienceList type="Work" number="5" />
    </div>
  );
};

export const Nonwork = () => {
  return (
    <div className="nonwork">
      <h1>Other Experience</h1>
      <ExperienceList type="Nonwork" number="2" />
      <ExperienceList type="Education" number="2" />
    </div>
  );
};
