import Image from "./Image";


export default function Description() {

  return (

    <>

      <div className="container py-4">
        <div className="p-5 mb-4 bg-body-tertiary rounded-3">

          <div className="container-fluid py-5">
            <div className="row">
              <div className=" col -8">

                <h1 className="display-5 fw-bold">Dhiren Patyal</h1>
                <p className="col-md-8 fs-8">A highly motivated and diligent MCA graduate with experience

                  in both front-end and backend technologies, seeking an entry-
                  level position in the field of software development. Eager to

                  apply my programming skills, problem-solving abilities and
                  passion for technology to contribute effectively to the growth
                  and success of a dynamic organization.</p>

                <a href="https://www.linkedin.com/in/dhiren-patyal-711452221/" className="btn btn-primary btn-lg py-2" type="button">Linkedin</a>
                <a href="https://github.com/Dhiren-Patyal98" className="btn btn-primary btn-lg mx-3 py-2 px-4" type="button">Github</a>
              </div>
              <div className="col-4">
                <Image />
              </div>
            </div>

          </div>

        </div>
      </div>
    </>

  )
}
