const Section = () => {
  return (
    <>
      <h2>Role - Time</h2>
      <h3>Employer</h3>
      <p className="description">Description</p>
      <p className="project">Project</p>
    </>
  );
};

const SectionList = (props) => {
  let list = [];
  for (let i = 0; i < props.number; i++) {
    list.push(
      <>
        <Section />
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
      <SectionList number="5" />
    </>
  );
};

export const Nonwork = () => {
  return (
    <>
      <h1>Other Experience</h1>
      <SectionList number="3" />
    </>
  );
};
