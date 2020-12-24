import utechCrest from "../assets/utech-crest.png";
import "./FooterBox.css";

const institutionName = "University of Technology, Jamaica";

function FooterBox(): JSX.Element {
	return (
		<footer>
			<div className="flex-container">
				<div className="institution inline-block">
					<div>
						<img className="inline-block" src={utechCrest}></img>
					</div>

					<div>
						<h4>{institutionName}</h4>
						<p>
							237 Old Hope Road, Kingston 6, Jamaica W.I.<br />
							Tel: (876) 927-1680-8<br />
							Fax: (876) 977-4388 | (876) 927-1925
						</p>
					</div>
				</div>

				<div className="inline-block">
					<p>
						<b>Social Media</b><br />
						<a target="_blank" href="https://www.facebook.com/UTechJa/">Facebook</a><br />
						<a target="_blank" href="https://twitter.com/utechjamaica">Twitter</a><br />
						<a target="_blank" href="https://www.instagram.com/utechjamaica/">Instagram</a><br />
						<a target="_blank" href="https://www.youtube.com/user/utechjamaica">YouTube</a><br/>
					</p>
				</div>
			</div>

			<div className="center">
				<p>Copyright © 2020 {institutionName}. All rights reserved.</p>
			</div>
		</footer>
	);
}

export default FooterBox;