import { workItems } from "../data/HomeData";
import { Button } from "../components/Button";
export const Contact = () => {
  return (
    <main className="container d-flex flex-column gap-4 ">
      <section>
        <h3 className="text-preset-3 about-text text-center text-md-start">
          Submit a help request and we’ll get in touch shortly.
        </h3>
      </section>
      <section className="d-flex flex-column flex-md-row justify-content-md-between ">
        <div>
          <form
            className="d-flex flex-column mx-auto"
            style={{ maxWidth: "400px" }}
          >
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input type="text" className="form-control" />
            <label htmlFor="email">Email Address</label>
            <input type="email" className="form-control" />
            <label htmlFor="company name">Company Name</label>
            <input type="text" className="form-control" />
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" />
            <label htmlFor="message">Message</label>
            <input type="text" className="form-control" />

            <div className="d-flex gap-3 ">
              <input type="checkbox" style={{ width: "1.3rem" }} />
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
    </main>
  );
};
