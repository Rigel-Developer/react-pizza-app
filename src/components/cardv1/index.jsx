import "./styles.css";

const skillData = [
  {
    name: "HTML & CSS",
    level: "beginner",
    backgroundColor: "red",
  },
  {
    name: "JavaScript",
    level: "advanced",
    backgroundColor: "blue",
  },
  {
    name: "React",
    level: "intermediate",
    backgroundColor: "green",
  },
  {
    name: "Node.js",
    level: "beginner",
    backgroundColor: "yellow",
  },
  {
    name: "MongoDB",
    level: "beginner",
    backgroundColor: "pink",
  },
  {
    name: "Mysql",
    level: "beginner",
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
      {skill.name}{" "}
      {skill.level === "beginner"
        ? "🔰"
        : skill.level === "intermediate"
        ? "🚀"
        : "🤩"}
    </li>
  );
};
