import { useState } from "react";
import type { Credentials } from "../../types/Credentials";
import CredentialsCard from "../CredentialsCard/CredentialsCard";
import CredentialsForm from "../CredentialsForm/CredentialsForm";


function CredentialsList() {
	const [list, setList] = useState<Credentials[]>([
		{ id: "1", address: "google.com", login: "stefan2137", password: "G00gle!Pass92" },
    { id: "2", address: "facebook.com", login: "mario@example.com", password: "FaceB00k#82" },
    { id: "3", address: "github.com", login: "devmaster", password: "GitHub$Dev731" },
    { id: "4", address: "youtube.com", login: "cooluser99", password: "YouTube@2026" },
    { id: "5", address: "reddit.com", login: "pixelhunter", password: "Reddit!Fox482" },
    { id: "6", address: "netflix.com", login: "moviefan@example.com", password: "Netflix#Watch91" },
    { id: "7", address: "spotify.com", login: "musiclover", password: "Spotify$Beat64" },
    { id: "8", address: "amazon.com", login: "shopper@example.com", password: "Amazon!Cart83" },
    { id: "9", address: "stackoverflow.com", login: "cpp_programmer", password: "Stack#Overflow27" },
	]);

	function add(newElement: Credentials) {
		setList(prev =>
			[...prev,
				{
					...newElement,
					id: crypto.randomUUID()
				}
			]
		);
	}

	return (
		<>
			<CredentialsForm add={add} />
			<div id="credentials" className="container-xxl my-3">

				<div className="row g-3">
					{
						list.map((element) => (
							<CredentialsCard key={element.id} {...element} />
						))
					}
				</div>

			</div>
		</>
	);
}
export default CredentialsList;
