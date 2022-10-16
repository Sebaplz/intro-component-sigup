import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="main flex justify-center items-center min-h-screen">
      <div className="container sm:w-5/6 sm:flex-row lg:flex items-center">
        <article className="lg:w-3/6 lg:h-5/6 lg:mr-10">
          <h1 className="sm:text-center lg:text-left sm:text-3xl lg:text-5xl text-white font-bold">
            Learn to code by watching others
          </h1>
          <p className="sm:text-center lg:text-left text-white pt-6">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </article>
        <article className="lg:w-3/6 lg:h-5/6 sm:mb-10">
          <div className="card-top rounded-lg h-20 flex items-center justify-center px-10 sm:mt-10 lg:mt-0 mb-5">
            <h2 className="text-white text-center">
              <strong>Try it free 7 days</strong> then $20/mo. thereafter
            </h2>
          </div>
          <div className="card-bottom bg-white p-5 rounded-lg flex-row">
            <form
              onSubmit={handleSubmit((data) => {
                console.log(JSON.stringify(data));
              })}
            >
              <input
                className="focus:ring-2 focus:ring-blue-500"
                {...register("firstName", {
                  required: "First Name cannot be empty",
                })}
                type="text"
                placeholder="Firs Name"
              />
              <p className="errors-message">{errors.firstName?.message}</p>
              <input
                {...register("lastName", {
                  required: "Last Name cannot be empty",
                })}
                type="text"
                placeholder="Last Name"
              />
              <p className="errors-message">{errors.lastName?.message}</p>
              <input
                {...register("email", {
                  required: "Email cannot be empty",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Looks like this is not an email",
                  },
                })}
                autoComplete="email"
                placeholder="Email Address"
              />
              <p className="errors-message">{errors.email?.message}</p>
              <input
                {...register("password", {
                  required: "Password cannot be empty",
                })}
                type="Password"
                placeholder="Password"
              />
              <p className="errors-message">{errors.password?.message}</p>
              <button className="btn w-full text-white h-12 mb-4" type="submit">
                Claim your free trial
              </button>
            </form>
            <p className="text-xs text-center text-gray-400">
              By clicking the button, you are agreeing to our
              <strong className="text-red-400 cursor-pointer">
                {" "}
                Terms and Services
              </strong>
            </p>
          </div>
        </article>
      </div>
    </div>
  );
}

export default App;
