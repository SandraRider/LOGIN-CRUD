import { useForm } from "react-hook-form";
import { useCoaches } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function CoachFormPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { createCoach } = useCoaches();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async (data) => {
    await createCoach(data);
    navigate("/tasks");
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <form onSubmit={onSubmit}>
          <h1 className="text-3xl font-bold my-2">Crear Entrenador</h1>
          <input
            type="text"
            {...register("name", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Nombre"
          />
          {errors.name && <p className="text-red-500">Nombre requerido</p>}
          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500">Email requerido</p>}
          <input
            type="text"
            {...register("specialty", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Especialidad"
          />
          {errors.specialty && <p className="text-red-500">Especialidad requerida</p>}
          <button
            type="submit"
            className="bg-indigo-500 px-4 py-2 rounded-md my-2 w-full"
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
}

export default CoachFormPage;