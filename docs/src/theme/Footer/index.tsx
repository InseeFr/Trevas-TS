/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import { useThemeConfig } from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';

export interface FooterLinkProps {
	[key: string]: any;
	to: string;
	label: string;
	href: string;
	prependBaseUrlToHref: boolean;
}

function Footer() {
	const { footer } = useThemeConfig();

	if (!footer) {
		return null;
	}

	return (
		<footer
			className={clsx('footer', {
				'footer--dark': footer.style === 'dark',
			})}
		>
			<div className="container">
				<div className="row">
					<div className="col col--12 centered-content">
						<div className="sponsors">
							<a
								href="https://www.insee.fr"
								target="_blank"
								rel="noreferrer noopener"
							>
								<img
									src={useBaseUrl('/img/logo_insee.png')}
									alt="Logo Insee"
									width="38px"
									className="sponsor"
								/>
							</a>
							<a
								href="http://making-sense.info/"
								target="_blank"
								rel="noreferrer noopener"
							>
								<img
									src={useBaseUrl('/img/logo_ms.svg')}
									alt="Logo Making Sense"
									width="64px"
									className="sponsor"
								/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
