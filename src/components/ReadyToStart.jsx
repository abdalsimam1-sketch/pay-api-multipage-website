import { EmailForm } from "./EmailForm";

export const ReadyToStart = () => {
  return (
    <section className="d-flex flex-column flex-md-row justify-content-md-between align-items-stretch align-items-md-center my-5">
      <div className="text-preset-2 text-nowrap ready-text">
        Ready to start?
      </div>
      <div className="w-100 ">
        <EmailForm></EmailForm>
      </div>
    </section>
  );
};
