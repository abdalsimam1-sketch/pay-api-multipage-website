import { pricePlans } from "../data/PricingData";
import { ReadyToStart } from "../components/ReadyToStart";
import { Button } from "../components/Button";
export const Pricing = () => {
  return (
    <main className="text-center text-md-start">
      <section className="container">
        <h2 className="text-preset-2 my-5">Pricing</h2>

        <div className="row">
          {pricePlans.map((item, index) => (
            <div className="col-12 col-md-4" key={index}>
              <div>
                <h4
                  className="text-preset-4"
                  style={{ color: "var(--red-600)" }}
                >
                  {item.title}
                </h4>
                <p className="text-preset-7-regular text-muted">
                  {item.description}
                </p>
                <h2 className="text-preset-2">${item.price.toFixed(2)}</h2>
                <hr />
                <ul className=" d-table mx-auto mx-md-0 p-0">
                  {item.features.map((feature, index) => (
                    <li
                      key={index}
                      className={`d-flex  gap-3  ${!feature.isAvailable ? "text-muted" : ""} `}
                    >
                      {feature.isAvailable && (
                        <i
                          className="bi bi-check "
                          style={{ color: "var(--red-600)" }}
                        ></i>
                      )}
                      {!feature.isAvailable && (
                        <i
                          className="bi bi-check "
                          style={{ color: "var(--red-600)", opacity: "0" }}
                        ></i>
                      )}
                      {feature.name}
                    </li>
                  ))}
                </ul>
              </div>
              <hr />
              <div className="my-4">
                <Button children="Request Access" variant="3"></Button>
              </div>
            </div>
          ))}
        </div>

        <ReadyToStart></ReadyToStart>
      </section>
    </main>
  );
};
