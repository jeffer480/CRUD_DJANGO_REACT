import { useForm } from 'react-hook-form'
import { useEffect } from "react"
import { createTasks, deleteTasks, updateTasks, getTask } from '../api/tasks.api'
import { useNavigate, useParams, } from 'react-router-dom'
import { toast } from 'react-hot-toast'

export function TasksFormPage() {
	const { register, handleSubmit, formState: { errors }, setValue } = useForm();
	const navigate = useNavigate();
	const params = useParams();

	//update y create con condicional
	const onSubmit = handleSubmit(async (data) => {
		if (params.id){
			await updateTasks(params.id, data);
			toast.success('Tarea actualizada', { position: 'bottom-right', style: { background: '#101010', color: '#ffffff'} });
		}else{
			await createTasks(data);
			toast.success('Tarea creada', { position: 'bottom-right', style: { background: '#101010', color: '#ffffff'} });
		}
		navigate('/tasks')
	});
	//update agregar valores a los campos
	useEffect(() => {
		async function loadTask() {
			if (params.id) {
				const res = await getTask(params.id);
				setValue('title', res.data.title);
				setValue('description', res.data.description);
			}
		}
		loadTask();
  }, []);

	return (
		<div className='max-w-xl mx-auto p-4 bg-zinc-800 rounded-lg'>
			<form onSubmit={onSubmit}>
				<input type="text" placeholder="Tílulo" { ...register('title', { required: true }) } className='bg-zinc-700 p-3 rounded-lg block w-full mb-4' />
				{ errors.title && <span>Este campo es requerido</span> }
				<textarea rows="3" placeholder="Descripción" { ...register('description', { required: true }) } className='bg-zinc-700 p-3 rounded-lg block w-full mb-4' ></textarea>
				{ errors.description && <span>Este campo es requerido</span> }
      			<button className="bg-indigo-600 px-4 py-1 rounded-lg">Guardar</button>
			</form>
			{/* esta es otra forma de hacer condicionales //params.id &&  */}
			{ params.id && 
				<button
					onClick={async () => {
						const accepted = window.confirm('¿está seguro de eliminar está tarea?');
						if (accepted) {
							await deleteTasks(params.id);
							toast.error('Tarea aliminada', { position: 'bottom-right', style: { background: '#101010', color: '#ffffff'} });
							navigate('/tasks');
						}
					}}
					className='bg-red-500 px-4 py-1 rounded-lg mt-3'
				>Eliminar</button>
			}
		</div>
	)
}