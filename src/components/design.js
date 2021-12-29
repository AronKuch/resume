const Experience = (props) => {
  let row = props.number + (props.type === "Education" ? 4 : 2);
  let col = props.type === "Work" ? 1 : 2;
  let gridLocation = {
    gridRowStart: row,
    gridRowEnd: "span 1",
    gridColumnStart: col,
    gridColumnEnd: "span 1",
  };
  return (
    <div className="experience" style={gridLocation}>
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
