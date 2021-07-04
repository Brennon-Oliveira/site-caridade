import style from '../../styles/components/subComponents/LastFooter.module.css'

export default function LastFooter (){

    return(
        <footer id={style.lastFooter}>
            <div className="container">
                <p>
                    © 2021 - {
                        new Date().getFullYear()
                    } sitecaridade.com.br - All Rights Reserved.
                </p>
                <a href="">
                    {/* <i class="fas fa-code"></i> */}
                    <svg height="26" width="40">
                    <line x1="10" y1="5" x2="0" y2="13"  />
                    <line x1="0" y1="13" x2="10" y2="21" />

                    <line x1="15" y1="30" x2="25" y2="0" />
                    
                    <line x1="30" y1="5" x2="40" y2="13"  />
                    <line x1="40" y1="13" x2="30" y2="21" />
                    -
                    </svg>
                    Desenvolvedores
                    <div></div>
                </a>
            </div>
        </footer>
    )
}