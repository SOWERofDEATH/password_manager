import { useEffect, useState } from "react";
import { Tooltip, Modal } from "bootstrap";
import type { Credentials } from "../types/Credentials";

type formProps = {
	add: (newElement: Omit<Credentials, "id">) => void,
};

const emptyForm: Omit<Credentials, "id"> = {
    address: "",
    login: "",
    password: ""
};

function CredentialsForm(props: formProps) {
	const [submitSuccessful, setSubmitSuccessful] = useState(false);
	const [formData, setFormData] = useState<Omit<Credentials, "id">>(emptyForm);

	useEffect(() => {
			const tooltips = document.querySelectorAll(".tt");

			tooltips.forEach((t) => {
				new Tooltip(t);
			});
	}, []);

	async function successIcons() {
		try {
			setSubmitSuccessful(true);
			setTimeout(() => {

				setSubmitSuccessful(false);

				const modalElement = document.getElementById("formModal");

				if (modalElement) {
					const modal = Modal.getInstance(modalElement);
					modal?.hide();
				}

			}, 1500);
		} catch (error) {
			console.error("Failed to change icons:", error);
		}
	}

	function handleSubmit(e) {
		e.preventDefault()

		props.add(formData);

		setFormData(emptyForm);

		successIcons();
	}

	return (
		<>
			<div className="container-xxl d-flex justify-content-between pt-5 pb-1">

				<h3 className="text-secondary">Your saved credentials</h3>

				<button
					className="btn btn-warning rounded-pill"
					data-bs-toggle="modal"
					data-bs-target="#formModal"
				>
					Add New Credentials
				</button>

			</div>

			<div className="modal" id="formModal" tabIndex={-1}>
				<div className="modal-dialog">
					<div className="modal-content">

						<div className="modal-header">
							<h5 className="modal-title">Add New Credentials</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal"></button>
						</div>

						<div className="modal-body">

							<form id="credentials-form" onSubmit={(e) => handleSubmit(e)}>

								<small className="mx-1"><label htmlFor="address" className="form-group-item text-uppercase text-muted">Address</label></small>
								<div className="input-group mb-2">
									{
										submitSuccessful ?
											<i className="bi bi-lock-fill text-success input-group-text"></i> :
											<i className="bi bi-globe text-warning input-group-text"></i>
									}
									<input value={formData.address} onChange={ (event) => setFormData( prev => ({...prev, address: event.target.value })) } id="address" type="url" className="form-control" placeholder="e.g. www.google.com" />
									<i
										className="bi bi-question-circle text-muted input-group-text tt"
										data-bs-placement="top"
										title="Enter the website URL, e.g. https://google.com"
									>
									</i>
								</div>

								<small className="mx-1"><label htmlFor="login" className="form-group-item text-uppercase text-muted">Login</label></small>
								<div className="input-group mb-2">
									{
										submitSuccessful ?
											<i className="bi bi-lock-fill text-success input-group-text"></i> :
											<i className="bi bi-person-fill text-warning input-group-text"></i>
									}
									<input value={formData.login} onChange={ (event) => setFormData( prev => ({...prev, login: event.target.value })) } id="login" type="text" className="form-control" placeholder="e.g. coolname67@example.com" />
									<i
										className="bi bi-question-circle text-muted input-group-text tt"
										data-bs-placement="top"
										title="Enter your username or email address used to sign in."
									>
									</i>
								</div>

								<small className="mx-1"><label htmlFor="password" className="form-group-item text-uppercase text-muted">Password</label></small>
								<div className="input-group mb-2">
									{
										submitSuccessful ?
											<i className="bi bi-lock-fill text-success input-group-text"></i> :
											<i className="bi bi-key-fill text-warning input-group-text"></i>
									}
									<input value={formData.password}  onChange={ (event) => setFormData( prev => ({...prev, password: event.target.value })) } id="password" type="password" className="form-control" placeholder="Maybe try 0000? sometimes it works..." />
									<i
										className="bi bi-question-circle text-muted input-group-text tt"
										data-bs-placement="top"
										title="Enter the password associated with this account."
									>
									</i>
								</div>

							</form>

						</div>

						<div className="modal-footer">
							{
								submitSuccessful ?
								<button type="submit" form="credentials-form" className="btn btn-success rounded-pill">Credentials Added</button> :
								<button type="submit" form="credentials-form" className="btn btn-warning rounded-pill">Add Credentials</button>
							}
						</div>

					</div>
				</div>
			</div>


		</>
	);
}
export default CredentialsForm;
