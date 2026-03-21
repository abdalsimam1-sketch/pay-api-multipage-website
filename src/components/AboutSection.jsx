export const AboutSection = ({ title, text }) => {
  return (
    <main className="container d-flex flex-column flex-md-row justify-content-md-around ">
      <h3 className="text-preset-3 text-nowrap ">{title}</h3>
      <p className="text-preset-7-regular text-muted about-text">{text}</p>
    </main>
  );
};
