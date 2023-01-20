import { useState } from "react";

function App() {
  const [input, setInput] = useState(false);
  const [received, setReceived] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const headers = {
      Accept: "*/*",
    };

    const data = new FormData(e.currentTarget);
    data.append("file_type", "image");
    const response = await fetch(
      "https://master-white-box-cartoonization-psi1104.endpoint.ainize.ai/predict",
      {
        method: "POST",
        headers,
        body: data,
        mode: "cors",
      }
    );

    let imageBlob = await response.blob();
    const imageObjectURL = URL.createObjectURL(imageBlob);
    console.log(imageObjectURL);
    setReceived(imageObjectURL);
  };

  // const handleInput = (e) => setInput(e.target.files[0]);

  return (
    <div className="container-sm">
      <h1 className="display-2 text-center fw-semibold my-5 text-light">
        Cartoonify
      </h1>

      <form
        id="form"
        className="container-fluid text-center mb-5"
        onSubmit={(e) => handleSubmit(e)}
      >
        <button className="btn btn-primary btn-file btn-lg">
          Browse
          <input
            type="file"
            name="source"
            onChange={(e) => {
              const imageObjectURL = URL.createObjectURL(e.target.files[0]);
              setInput(imageObjectURL);
              document.getElementById("form").requestSubmit();
            }}
          />
        </button>
      </form>

      {received && (
        <div className="row mb-5">
          <div className="col">
            <img src={input} alt="input" className="img-fluid rounded" />
          </div>
          <div className="col">
            <img src={received} alt="output" className="img-fluid rounded" />
          </div>
        </div>
      )}

      <h3 className="h3 text-center text-light mb-3">Sample Gallery</h3>

      <div
        id="carouselExampleIndicators"
        className="carousel slide mb-5"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
        </ol>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col">
                <img
                  src="/images/lady.jpg"
                  alt="lady-1"
                  className="img-fluid rounded"
                />
              </div>
              <div className="col">
                <img
                  src="/images/lady-2.jpeg"
                  alt="lady-2"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row">
              <div className="col">
                <img
                  src="/images/woman.jpg"
                  alt="woman-1"
                  className="img-fluid rounded"
                />
              </div>
              <div className="col">
                <img
                  src="/images/woman-2.jpeg"
                  alt="woman-2"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row">
              <div className="col">
                <img
                  src="/images/guy.jpg"
                  alt="guy-1"
                  className="img-fluid rounded"
                />
              </div>
              <div className="col">
                <img
                  src="/images/guy-2.jpeg"
                  alt="guy-2"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row">
              <div className="col">
                <img
                  src="/images/fridge.jpg"
                  alt="fridge-1"
                  className="img-fluid rounded"
                />
              </div>
              <div className="col">
                <img
                  src="/images/fridge-2.jpeg"
                  alt="fridge-2"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row">
              <div className="col">
                <img
                  src="/images/city.jpg"
                  alt="city-1"
                  className="img-fluid rounded"
                />
              </div>
              <div className="col">
                <img
                  src="/images/city-2.jpeg"
                  alt="city-2"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="row">
              <div className="col">
                <img
                  src="/images/scenery.jpg"
                  alt="scenery-1"
                  className="img-fluid rounded"
                />
              </div>
              <div className="col">
                <img
                  src="/images/scenery-2.jpeg"
                  alt="scenery-2"
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only"></span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only"></span>
        </a>
      </div>
    </div>
  );
}

export default App;
