import "./styles.css";

const skillData = [
  {
    name: "HTML & CSS",
    icon: "💪🏿",
    backgroundColor: "red",
  },
  {
    name: "JavaScript",
    icon: "💪🏿",
    backgroundColor: "blue",
  },
  {
    name: "React",
    icon: "🚀",
    backgroundColor: "green",
  },
  {
    name: "Node.js",
    icon: "💪🏿",
    backgroundColor: "yellow",
  },
  {
    name: "MongoDB",
    icon: "💪🏿",
    backgroundColor: "pink",
  },
  {
    name: "Mysql",
    icon: "💪🏿",
    backgroundColor: "orange",
  },
];

export default function Card() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

const Avatar = () => {
  return (
    <img
      src="https://images.pexels.com/photos/634021/pexels-photo-634021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt=""
      className="avatar"
    />
  );
};

const Intro = () => {
  return (
    <>
      <h1>John Doe</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
        necessitatibus iusto voluptas laboriosam soluta suscipit, non eum ipsa
        cumque
      </p>
    </>
  );
};

const SkillList = () => {
  return (
    <ul className="skill-list">
      {skillData.map((skill) => (
        <Skill key={skill.name} skill={skill} />
      ))}
    </ul>
  );
};

const Skill = ({ skill }) => {
  return (
    <li
      className="skill"
      style={{ backgroundColor: `${skill.backgroundColor}` }}
    >
      {skill.name} {skill.icon}
    </li>
  );
};
