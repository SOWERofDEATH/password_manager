import type { Credentials } from "../types/Credentials";
import { useState } from "react";

function CredentialsCard(props: Credentials) {
	const [visible, setVisible] = useState(false);
	const [copied, setCopied] = useState("");

	async function copyToClipboard(value: string, field: string) {
		try {
			await navigator.clipboard.writeText(value);
			setCopied(field);
			setTimeout(() => {
				setCopied("");
			}, 1500);
		} catch (error) {
			console.error("Failed to copy:", error);
		}
	}

	return (
		<div className="col-12 col-sm-6 col-lg-4 col-xl-3">
			<div className="card border shadow-sm rounded-5 h-100">
				<div className="card-body p-3">

					<div className="d-flex align-items-center gap-3 mb-3">
						<img
							src={`https://www.google.com/s2/favicons?domain=${encodeURIComponent(props.address)}&sz=64`}
							width="40"
							height="40"
							className="rounded-pill"
						/>
						<div className="flex-grow-1">
							<h5 className="mb-0 fw-semibold">{props.address}</h5>
							<small className="text-muted">Website credentials</small>
						</div>
					</div>

					<hr />

					<div className="mb-3">
						<small className="text-muted text-uppercase">Username</small>
						<div className="d-flex justify-content-between align-items-center">
							<span>{props.login}</span>
							<button
								type="button"
								className="btn btn-sm btn-white border-0"
								onClick={() => copyToClipboard(props.login, "login")}
								aria-label="Copy username"
							>
								<i className={`bi ${copied === "login" ? "bi-check-lg text-success" : "bi-copy"}`}></i>
							</button>
						</div>
					</div>

					<div className="mb-3">
						<small className="text-muted text-uppercase">Password</small>
						<div className="d-flex justify-content-between align-items-center">
							<span>{visible ? props.password : "••••••••••••"}</span>
							<div className="d-flex ">
								<button
									type="button"
									className="btn btn-sm btn-white border-0"
									onClick={() => setVisible(prev => !prev)}
									aria-label={visible ? "Hide password" : "Show password"}
								>
									<i className={`bi ${visible ? "bi-eye-slash" : "bi-eye"}`}></i>
								</button>
								<button
									type="button"
									className="btn btn-sm btn-white border-0"
									onClick={() => copyToClipboard(props.password, "password")}
									aria-label="Copy password"
								>
									<i className={`bi ${copied === "password" ? "bi-check-lg text-success" : "bi-copy"}`}></i>
								</button>
							</div>
						</div>
					</div>

					<hr />

					<div className="d-flex justify-content-end gap-2">
						<button type="button" className="btn btn-sm btn-outline-secondary rounded-pill">
							<i className="bi bi-pencil me-1"></i> Edit
						</button>
						<button type="button" className="btn btn-sm btn-outline-danger rounded-pill">
							<i className="bi bi-trash me-1"></i> Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CredentialsCard;
