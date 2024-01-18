import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";

function SignUpForm() {
  // eslint-disable-next-line no-unused-vars
  const { signup, isLoading } = useSignup();
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      },
    );
  }
  // error={errors?.fullName?.message}
  return (
    <div className=" flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" bg-slate-200 w-[25rem] rounded-lg p-10 flex flex-col text-lg justify-center text-center space-y-4">
          <label htmlFor="fullName">Full Name</label>
          <input
            className=" w-full rounded-md p-1"
            type="text"
            id="fullName"
            disabled={isLoading}
            {...register("fullName", { required: "This field is required" })}
            aria-invalid={errors.fullName ? "true" : "false"}
          />
          {errors.fullName && <p role="alert">{errors?.fullName?.message}</p>}

          <label htmlFor="email">Email address </label>
          <input
            className=" w-full rounded-md p-1"
            type="email"
            id="email"
            disabled={isLoading}
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provide a valid email address",
              },
            })}
            aria-invalid={errors.email ? "true" : "false"}
          />
          {errors.email && <p role="alert">{errors?.email?.message}</p>}

          <label htmlFor="password">Password (min 8 characters)</label>
          <input
            className=" w-full rounded-md p-1"
            type="password"
            id="password"
            disabled={isLoading}
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Password needs a minimum of 8 characters",
              },
            })}
            aria-invalid={errors.password ? "true" : "false"}
          />
          {errors.password && <p role="alert">{errors?.password?.message}</p>}

          <label htmlFor="passwordConfirm">Repeat password </label>
          <input
            className=" w-full rounded-md p-1"
            type="password"
            id="passwordConfirm"
            disabled={isLoading}
            {...register("passwordConfirm", {
              required: "This field is required",
              validate: (value) =>
                value === getValues().password || "Passwords need to match",
            })}
            aria-invalid={errors.passwordConfirm ? "true" : "false"}
          />
          {errors.passwordConfirm && (
            <p role="alert">{errors?.passwordConfirm?.message}</p>
          )}

          <div>
            <button
              className=" bg-black text-white rounded-full p-1 w-20"
              type="reset"
            >
              Reset
            </button>
          </div>
          <button
            className=" w-full rounded-full bg-black text-white p-1"
            disabled={isLoading}
            type="submit"
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}

export default SignUpForm;
