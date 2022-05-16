const MainInfoPatient = () => {
  return (
    <div id="main-info-patient" className="d-block">
      <div className="d-flex justify-content-center diet-img-container">
        <h1>name surname</h1>

        <img src="https://picsum.photos/950/300" alt="last-diet" />
      </div>
      <div className="my-4 text-center title-box">
        <p>
          {" "}
          <b>next appointment</b>
        </p>
        <p>20/06/2022</p>
      </div>
      <div>
        <p>
          {" "}
          <b>my notes</b>
        </p>
        <div className="d-flex justify-content-center my-2">
          <p className="doctor-notes">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error sunt
            sint voluptatem sequi, dolores saepe! Sequi doloribus dolorum ipsum
            maxime excepturi aperiam magni! Quibusdam nostrum a minima
            aspernatur enim est. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Atque magni autem similique veniam rerum dolorem,
            dignissimos, nisi laboriosam reiciendis odio hic, ab excepturi?
            Sapiente odio vitae aperiam tempore qui quam? Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Ea laboriosam ab, provident iure
            libero repudiandae explicabo eius debitis facere ex labore,
            aspernatur aperiam, beatae deleniti totam necessitatibus! Ab, amet
            autem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainInfoPatient;
