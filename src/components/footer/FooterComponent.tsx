import utechCrest from "../../assets/utech-crest.png";
import "./FooterComponent.css";

const institutionName = "University of Technology, Jamaica";

function FooterComponent(): JSX.Element {
	return (
		<footer className="FooterComponent">
			<div className="flex-container">
				<div className="institution inline-block">
					<div><img src={utechCrest}></img></div>

					<div>
						<span>{institutionName}</span>
						<p>
							237 Old Hope Road, Kingston 6, Jamaica W.I.<br />
                            Tel: (876) 927-1680-8<br />
                            Fax: (876) 977-4388 | (876) 927-1925
                        </p>
					</div>
				</div>

				<div>
					<span>Social Media</span>
					<ul>
						<li>
							<a target="_blank" href="https://www.facebook.com/UTechJa/">Facebook</a>
						</li>
						<li>
							<a target="_blank" href="https://twitter.com/utechjamaica">Twitter</a>
						</li>
						<li>
							<a target="_blank" href="https://www.instagram.com/utechjamaica/">Instagram</a>
						</li>
						<li>
							<a target="_blank" href="https://www.youtube.com/user/utechjamaica">YouTube</a>
						</li>
					</ul>
				</div>
			</div>

			<div>
				<p>Copyright © 2020 {institutionName}. All rights reserved.</p>
			</div>
		</footer>
	);
}

export default FooterComponent;