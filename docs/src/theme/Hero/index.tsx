import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useColorMode } from '@docusaurus/theme-common';
import Translate from '@docusaurus/Translate';

import SvgArrowRight from '@site/src/svg/ArrowRight';
import SvgExplore from '@site/src/svg/Explore';
import SvgEngine from '@site/src/svg/Engine';
import SvgTrevasBox from '@site/src/svg/TrevasBox';
import SvgClientApps from '@site/src/svg/ClientApps';

function Hero() {
	const { colorMode } = useColorMode();
	const isDarkTheme = colorMode === 'dark';
	const logoSrc = isDarkTheme
		? 'img/logo_trevas_TS_light.svg'
		: 'img/logo_trevas_TS_dark.svg';
	const svgColor = isDarkTheme ? 'white' : 'black';
	return (
		<header className="rds-hero">
			<div className="container">
				<div className="row">
					<div className="col col--12">
						<div className="row">
							<div className="col col--12 centered-content">
								<img src={logoSrc} alt="Trevas logo" />
							</div>
						</div>
						<div className="boxes">
							<div className="box">
								<span className="icon">
									<SvgTrevasBox color={svgColor} />
								</span>
								<div className="text">
									<h3 className="title">
										<Translate description="Box title Trevas">
											Trevas TS
										</Translate>
									</h3>
									<p className="description">
										<Translate description="Box description Trevas">
											Getting started with Trevas TypeScript VTL engine
										</Translate>
									</p>
									<span className="more">
										<Translate description="See more">See more</Translate>
										<SvgArrowRight color="#DC382C" />
									</span>
								</div>
								<a href={useBaseUrl('/introduction')} className="link">
									<Translate description="See more">See more</Translate>
								</a>
							</div>

							<div className="box">
								<span className="icon">
									<SvgEngine color={svgColor} />
								</span>
								<div className="text">
									<h3 className="title">
										<Translate description="Box title coverage">
											Engine coverage
										</Translate>
									</h3>
									<p className="description">
										<Translate description="Box description coverage">
											Check the current coverage of VTL in Trevas TypeScript
											engine
										</Translate>
									</p>
									<span className="more">
										<Translate description="See more">See more</Translate>
										<SvgArrowRight color="#DC382C" />
									</span>
								</div>
								<a href={useBaseUrl('/coverage')} className="link">
									<Translate description="See more">See more</Translate>
								</a>
							</div>

							<div className="box">
								<span className="icon">
									<SvgExplore color={svgColor} />
								</span>
								<div className="text">
									<h3 className="title">
										<Translate description="Developper guide title VTL">
											Developper guide
										</Translate>
									</h3>
									<p className="description">
										<Translate description="Developper guide description VTL">
											Explore how to use Trevas TS
										</Translate>
									</p>
									<span className="more">
										<Translate description="See more">See more</Translate>
										<SvgArrowRight color="#DC382C" />
									</span>
								</div>
								<a href={useBaseUrl('/developer-guide')} className="link">
									<Translate description="See more">See more</Translate>
								</a>
							</div>

							<div className="box">
								<span className="icon">
									<SvgClientApps color={svgColor} />
								</span>
								<div className="text">
									<h3 className="title">
										<Translate description="Showcase title VTL">
											Showcase
										</Translate>
									</h3>
									<p className="description">
										<Translate description="Showcase description VTL">
											Run through Storybook to try Trevas TypeScript engine
										</Translate>
									</p>
									<span className="more">
										<Translate description="See more">See more</Translate>
										<SvgArrowRight color="#DC382C" />
									</span>
								</div>
								<a
									href={'https://inseefr.github.io/Trevas-TS/storybook'}
									className="link"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Translate description="See more">Explore</Translate>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}

export default Hero;
