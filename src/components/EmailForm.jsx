import { Button } from "../components/Button";

export const EmailForm = () => {
  return (
    <main className="container">
      <form>
        <div className="d-flex flex-column flex-md-row gap-3  gap-md-0 rounded-pill email-form">
          <input
            type="text"
            className="form-control rounded-pill "
            placeholder="Enter email address"
          />
          <Button variant="1" children="Schedule a demo"></Button>
        </div>
      </form>
    </main>
  );
};
