import { workItems } from "../data/HomeData";
import { Button } from "../components/Button";
import { ReadyToStart } from "../components/ReadyToStart";
import { FormField } from "../components/FormField";
import { useForm } from "react-hook-form";

export const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <main className="container d-flex flex-column ">
      <section>
        <h3 className="text-preset-3 about-text text-center text-md-start my-5">
          Submit a help request and we’ll get in touch shortly.
        </h3>
      </section>

      <section className="d-flex flex-column gap-4 flex-md-row justify-content-md-between ">
        <div>
          <form
            className="d-flex flex-column mx-auto"
            style={{ maxWidth: "400px" }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormField
              label="Name"
              type="text"
              id="name"
              {...register("name", { required: "Name is required" })}
            ></FormField>
            {errors.name && (
              <p className="text-danger">{errors.name.message}</p>
            )}
            <FormField
              label="Email Address"
              type="email"
              id="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            ></FormField>
            {errors.email && (
              <p className="text-danger">{errors.email.message}</p>
            )}
            <FormField
              label="Company Name"
              type="text"
              id="company"
              {...register("company", { required: "Company Name is Required" })}
            ></FormField>
            {errors.company && (
              <p className="text-danger">{errors.company.message}</p>
            )}
            <FormField
              label="Title"
              type="text"
              id="title"
              {...register("title", { required: "Title is required" })}
            ></FormField>
            {errors.title && (
              <p className="text-danger">{errors.title.message}</p>
            )}
            <FormField
              label="Message"
              type="text"
              id="message"
              {...register("message", { required: "Message is required" })}
            ></FormField>
            {errors.message && (
              <p className="text-danger">{errors.message.message}</p>
            )}
            <div className="d-flex gap-3 ">
              <input
                type="checkbox"
                style={{ width: "1.3rem" }}
                {...register("subscribe")}
              />
              <p className="text-preset-7-regular text-muted">
                Stay up-to-date with company announcements and updates to our
                API
              </p>
            </div>
            <div>
              <Button variant="3" children="Submit"></Button>
            </div>
          </form>
        </div>
        <div className="row g-0 about-text text-center text-md-start gap-0">
          <h4 className="text-preset-4 about-text ">
            Join the thousands of innovators already building with us
          </h4>
          {workItems.map((item, index) => (
            <div className="col-6 col-md-4 g-4 g-md-0" key={index}>
              <img src={item.image} alt="" className="img-fluid" />
            </div>
          ))}
        </div>
      </section>
      <section className="container">
        <ReadyToStart></ReadyToStart>
      </section>
    </main>
  );
};
