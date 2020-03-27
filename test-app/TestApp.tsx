import React from 'react';
import './TestApp.scss';

export const TestApp = () => {
    return (
        <div className="testapp__container">
            <header>
                <nav>
                    <h1>Widget Test Site</h1>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                    </ul>
                </nav>
            </header>

            <section>
                <article>
                    <h2>About</h2>
                    <p>
                        This is a simple test site that displays some content,
                        used as a backdrop to test the widget's placement and
                        visibility.
                    </p>
                </article>

                <article>
                    <h2>Why are you doing this?</h2>
                    <p>
                        The South African Department of Telecommunications has,
                        in a gazette published on the 26th of March 2020 (Vol.
                        657, No. 43164), has made it mandatory for all .za TLDs
                        to display a link to the{' '}
                        <a href="https://sacoronavirus.co.za/" target="_blank">
                            official government Corona Virus information portal
                        </a>
                        .
                    </p>
                    <p>
                        I'm performing care or maintenance on a number of .ZA
                        TLDs at this point in time and, by the principles of
                        DRY, am creating a configurable overlay that can be
                        quickly deployed on all of them, work on mobile and
                        desktop devices, and be shifted around as necessary to
                        avoid conflict with other such information overlays.
                    </p>
                </article>
            </section>

            <footer>
                <p>
                    Find me on Github{' '}
                    <a target="_blank" href="https://github.com/64Mega">
                        @64Mega
                    </a>
                </p>
            </footer>
        </div>
    );
};
