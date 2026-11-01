function Nav() {

	return (
		<>
			<nav className="navbar navbar-expand-md sticky-md-top border-bottom bg-white">

				<div className="container-xxl">

					<a href="#" className="navbar-brand">
						<span className="fw-bold text-secondary">
							<i className="bi bi-shield-lock mx-3 text-warning"></i>
							Password Manager
						</span>
					</a>

					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#main-nav"
					>
						<span className="navbar-toggler-icon"></span>
					</button>

					<div
						className="collapse navbar-collapse justify-content-end align-center"
						id="main-nav"
					>
						<ul className="navbar-nav">
							<li className="nav-item">
								<a href="#credentials" className="nav-link text-secondary">My Passwords</a>
							</li>

							<li className="nav-item d-md-none">
								<a data-bs-toggle="modal" data-bs-target="#formModal"className="nav-link text-secondary">Add New Password</a>
							</li>

							<li className="nav-item d-none d-md-inline">
								<a data-bs-toggle="modal" data-bs-target="#formModal" className="btn btn-warning rounded-pill">Add New Password</a>
							</li>
						</ul>
					</div>

				</div>

			</nav>
		</>
	);
}
export default Nav;
