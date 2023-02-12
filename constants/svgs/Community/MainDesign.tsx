import React from "react";
import { View, Text } from "react-native";
import { SvgXml } from "react-native-svg";

interface DesignProps {
  width: number;
  height: number;
}

export function MainDesign({ width, height }: DesignProps) {
  const svgMarkup = `
  <svg width=${width} height=${height} viewBox="0 0 401 800" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.0416667" d="M544.026 -23.3968C238.219 -12.0944 56.9225 486.266 4.49996 734.033L363.621 646.656L917.361 301.267C920.336 188.336 849.833 -34.6991 544.026 -23.3968Z" stroke="url(#paint0_linear_74_4867)" stroke-width="0.783333"/>
<path opacity="0.0833333" d="M548.379 -19.627C242.431 -13.7072 52.5407 481.4 -4.16116 728.214L356.408 647.167L916.028 311.565C920.956 198.701 854.327 -25.5468 548.379 -19.627Z" stroke="url(#paint1_linear_74_4867)" stroke-width="0.766667"/>
<path opacity="0.125" d="M552.689 -15.7533C246.694 -15.2178 48.2671 476.486 -12.6969 722.271L349.21 647.579L914.539 321.867C921.421 209.104 858.685 -16.2887 552.689 -15.7533Z" stroke="url(#paint2_linear_74_4867)" stroke-width="0.75"/>
<path opacity="0.166667" d="M556.954 -11.7777C251.004 -16.6268 44.1021 471.524 -21.1054 716.205L342.03 647.891L912.895 332.167C921.727 219.539 862.904 -6.92869 556.954 -11.7777Z" stroke="url(#paint3_linear_74_4867)" stroke-width="0.733333"/>
<path opacity="0.208333" d="M561.172 -7.69843C255.361 -17.9305 40.0462 466.518 -29.3849 710.022L334.868 648.105L911.096 342.467C921.876 230.008 866.983 2.53362 561.172 -7.69843Z" stroke="url(#paint4_linear_74_4867)" stroke-width="0.716667"/>
<path opacity="0.25" d="M565.34 -3.51636C259.761 -19.1283 36.0991 461.471 -37.5345 703.722L327.724 648.223L909.14 352.762C921.865 240.508 870.92 12.0956 565.34 -3.51636Z" stroke="url(#paint5_linear_74_4867)" stroke-width="0.7"/>
<path opacity="0.291667" d="M569.459 0.765062C264.205 -20.2221 32.2642 456.381 -45.5496 697.306L320.605 648.241L907.031 363.049C921.696 251.032 874.714 21.7522 569.459 0.765062Z" stroke="url(#paint6_linear_74_4867)" stroke-width="0.683333"/>
<path opacity="0.333333" d="M573.525 5.14671C268.689 -21.2092 28.5399 451.253 -53.4301 690.778L313.508 648.163L904.765 373.325C921.367 261.58 878.362 31.5026 573.525 5.14671Z" stroke="url(#paint7_linear_74_4867)" stroke-width="0.666667"/>
<path opacity="0.375" d="M577.538 9.62796C273.212 -22.0887 24.928 446.088 -61.1734 684.141L306.436 647.988L902.345 383.589C920.878 272.15 881.863 41.3446 577.538 9.62796Z" stroke="url(#paint8_linear_74_4867)" stroke-width="0.65"/>
<path opacity="0.416667" d="M581.496 14.2059C277.774 -22.8618 21.4299 440.887 -68.7767 677.396L299.393 647.715L899.772 393.835C920.231 282.737 885.217 51.2735 581.496 14.2059Z" stroke="url(#paint9_linear_74_4867)" stroke-width="0.633333"/>
<path opacity="0.458333" d="M585.394 18.8825C282.368 -23.5249 18.0433 435.655 -76.241 670.546L292.377 647.349L897.042 404.065C919.42 293.34 888.42 61.2899 585.394 18.8825Z" stroke="url(#paint10_linear_74_4867)" stroke-width="0.616667"/>
<path opacity="0.5" d="M589.235 23.6534C286.998 -24.0809 14.7716 430.391 -83.5617 663.593L285.391 646.885L894.16 414.271C918.451 303.955 891.473 71.3878 589.235 23.6534Z" stroke="url(#paint11_linear_74_4867)" stroke-width="0.6"/>
<path opacity="0.541667" d="M593.015 28.5211C291.657 -24.5255 11.6135 425.099 -90.7388 656.542L278.437 646.328L891.123 424.455C917.319 314.58 894.372 81.5678 593.015 28.5211Z" stroke="url(#paint12_linear_74_4867)" stroke-width="0.583333"/>
<path opacity="0.583333" d="M596.732 33.4818C296.347 -24.8611 8.57055 419.779 -97.7696 649.392L271.517 645.675L887.934 434.612C916.027 325.212 897.117 91.8246 596.732 33.4818Z" stroke="url(#paint13_linear_74_4867)" stroke-width="0.566667"/>
<path opacity="0.625" d="M600.386 38.535C301.065 -25.0862 5.64331 414.434 -104.652 642.147L264.633 644.929L884.593 444.739C914.574 335.847 899.707 102.156 600.386 38.535Z" stroke="url(#paint14_linear_74_4867)" stroke-width="0.55"/>
<path opacity="0.666667" d="M603.974 43.6814C305.808 -25.1988 2.83144 409.068 -111.386 634.812L257.785 644.091L881.099 454.836C912.96 346.484 902.141 112.562 603.974 43.6814Z" stroke="url(#paint15_linear_74_4867)" stroke-width="0.533333"/>
<path opacity="0.708333" d="M607.495 48.9166C310.575 -25.2016 0.135534 403.68 -117.969 627.385L250.975 643.16L877.453 464.896C911.184 357.119 904.416 123.035 607.495 48.9166Z" stroke="url(#paint16_linear_74_4867)" stroke-width="0.516667"/>
<path opacity="0.75" d="M610.948 54.2426C315.364 -25.091 -2.44376 398.274 -124.399 619.873L244.206 642.137L873.657 474.92C909.248 367.75 906.533 133.576 610.948 54.2426Z" stroke="url(#paint17_linear_74_4867)" stroke-width="0.5"/>
<path opacity="0.791667" d="M614.33 59.6554C320.172 -24.8696 -4.90682 392.85 -130.676 612.275L237.477 641.023L869.71 484.902C907.149 378.372 908.488 144.18 614.33 59.6554Z" stroke="url(#paint18_linear_74_4867)" stroke-width="0.483333"/>
<path opacity="0.833333" d="M617.641 65.1549C324.998 -24.5357 -7.25289 387.411 -136.798 604.596L230.792 639.818L865.614 494.842C904.891 388.984 910.283 154.845 617.641 65.1549Z" stroke="url(#paint19_linear_74_4867)" stroke-width="0.466667"/>
<path opacity="0.875" d="M620.878 70.7411C329.841 -24.0877 -9.48146 381.961 -142.763 596.839L224.152 638.525L861.37 504.738C902.472 399.584 911.916 165.57 620.878 70.7411Z" stroke="url(#paint20_linear_74_4867)" stroke-width="0.45"/>
<path opacity="0.916667" d="M624.041 76.4107C334.697 -23.5274 -11.5927 376.499 -148.57 589.005L217.557 637.143L856.977 514.585C899.892 410.168 913.385 176.349 624.041 76.4107Z" stroke="url(#paint21_linear_74_4867)" stroke-width="0.433333"/>
<path opacity="0.958333" d="M627.127 82.1637C339.565 -22.8533 -13.587 371.03 -154.218 581.098L211.01 635.673L852.437 524.382C897.151 420.733 914.69 187.181 627.127 82.1637Z" stroke="url(#paint22_linear_74_4867)" stroke-width="0.416667"/>
<path d="M630.137 87.9979C344.444 -22.066 -15.4627 365.553 -159.704 573.121L204.514 634.115L847.752 534.125C894.252 431.276 915.83 198.062 630.137 87.9979Z" stroke="url(#paint23_linear_74_4867)" stroke-width="0.4"/>
<defs>
<linearGradient id="paint0_linear_74_4867" x1="-76.671" y1="477.064" x2="893.618" y2="170.571" gradientUnits="userSpaceOnUse">
<stop stop-color="#1DFCF4"/>
<stop offset="1" stop-color="#00FFF6" stop-opacity="0.27"/>
</linearGradient>
<linearGradient id="paint1_linear_74_4867" x1="-80.8696" y1="469.849" x2="894.491" y2="180.265" gradientUnits="userSpaceOnUse">
<stop stop-color="#1DFCF4"/>
<stop offset="1" stop-color="#00FFF6" stop-opacity="0.27"/>
</linearGradient>
<linearGradient id="paint2_linear_74_4867" x1="-84.9194" y1="462.588" x2="895.22" y2="189.994" gradientUnits="userSpaceOnUse">
<stop stop-color="#1DFCF4"/>
<stop offset="1" stop-color="#00FFF6" stop-opacity="0.27"/>
</linearGradient>
<linearGradient id="paint3_linear_74_4867" x1="-88.82" y1="455.284" x2="895.806" y2="199.753" gradientUnits="userSpaceOnUse">
<stop stop-color="#1DFCF4"/>
<stop offset="1" stop-color="#00FFF6" stop-opacity="0.27"/>
</linearGradient>
<linearGradient id="paint4_linear_74_4867" x1="-92.5709" y1="447.942" x2="896.247" y2="209.543" gradientUnits="userSpaceOnUse">
<stop stop-color="#1DFCF4"/>
<stop offset="1" stop-color="#00FFF6" stop-opacity="0.27"/>
</linearGradient>
<linearGradient id="paint5_linear_74_4867" x1="-96.1728" y1="440.563" x2="896.543" y2="219.362" gradientUnits="userSpaceOnUse">
<stop stop-color="#1DFCF4"/>
<stop offset="1" stop-color="#00FFF6" stop-opacity="0.27"/>
</linearGradient>
<linearGradient id="paint6_linear_74_4867" x1="-99.6221" y1="433.148" x2="896.696" y2="229.204" gradientUnits="userSpaceOnUse">
<stop stop-color="#1DFCF4"/>
<stop offset="1" stop-color="#00FFF6" stop-opacity="0.27"/>
</linearGradient>
<linearGradient id="paint7_linear_74_4867" x1="-102.921" y1="425.702" x2="896.703" y2="239.07" gradientUnits="userSpaceOnUse">
<stop stop-color="#1DFCF4"/>
<stop offset="1" stop-color="#00FFF6" stop-opacity="0.27"/>
</linearGradient>
<linearGradient id="paint8_linear_74_4867" x1="-106.067" y1="418.228" x2="896.566" y2="248.957" gradientUnits="userSpaceOnUse">
<stop stop-color="#1DFCF4"/>
<stop offset="1" stop-color="#00FFF6" stop-opacity="0.27"/>
</linearGradient>
<linearGradient id="paint9_linear_74_4867" x1="-109.059" y1="410.725" x2="896.285" y2="258.861" gradientUnits="userSpaceOnUse">
<stop stop-color="#1DFCF4"/>
<stop offset="1" stop-color="#00FFF6" stop-opacity="0.27"/>
</linearGradient>
<linearGradient id="paint10_linear_74_4867" x1="-111.9" y1="403.201" x2="895.858" y2="268.784" gradientUnits="userSpaceOnUse">
<stop stop-color="#1DFCF4"/>
<stop offset="1" stop-color="#00FFF6" stop-opacity="0.27"/>
</linearGradient>
<linearGradient id="paint11_linear_74_4867" x1="-114.587" y1="395.654" x2="895.286" y2="278.719" gradientUnits="userSpaceOnUse">
<stop stop-color="#1DFCF4"/>
<stop offset="1" stop-color="#00FFF6" stop-opacity="0.27"/>
</linearGradient>
<linearGradient id="paint12_linear_74_4867" x1="-117.12" y1="388.09" x2="894.569" y2="288.668" gradientUnits="userSpaceOnUse">
<stop stop-color="#1DFCF4"/>
<stop offset="1" stop-color="#00FFF6" stop-opacity="0.27"/>
</linearGradient>
<linearGradient id="paint13_linear_74_4867" x1="-119.5" y1="380.51" x2="893.707" y2="298.626" gradientUnits="userSpaceOnUse">
<stop stop-color="#1DFCF4"/>
<stop offset="1" stop-color="#00FFF6" stop-opacity="0.27"/>
</linearGradient>
<linearGradient id="paint14_linear_74_4867" x1="-121.724" y1="372.916" x2="892.701" y2="308.591" gradientUnits="userSpaceOnUse">
<stop stop-color="#1DFCF4"/>
<stop offset="1" stop-color="#00FFF6" stop-opacity="0.27"/>
</linearGradient>
<linearGradient id="paint15_linear_74_4867" x1="-123.795" y1="365.314" x2="891.549" y2="318.564" gradientUnits="userSpaceOnUse">
<stop stop-color="#1DFCF4"/>
<stop offset="1" stop-color="#00FFF6" stop-opacity="0.27"/>
</linearGradient>
<linearGradient id="paint16_linear_74_4867" x1="-125.711" y1="357.703" x2="890.252" y2="328.538" gradientUnits="userSpaceOnUse">
<stop stop-color="#1DFCF4"/>
<stop offset="1" stop-color="#00FFF6" stop-opacity="0.27"/>
</linearGradient>
<linearGradient id="paint17_linear_74_4867" x1="-127.471" y1="350.088" x2="888.811" y2="338.516" gradientUnits="userSpaceOnUse">
<stop stop-color="#1DFCF4"/>
<stop offset="1" stop-color="#00FFF6" stop-opacity="0.27"/>
</linearGradient>
<linearGradient id="paint18_linear_74_4867" x1="-129.078" y1="342.47" x2="887.224" y2="348.491" gradientUnits="userSpaceOnUse">
<stop stop-color="#1DFCF4"/>
<stop offset="1" stop-color="#00FFF6" stop-opacity="0.27"/>
</linearGradient>
<linearGradient id="paint19_linear_74_4867" x1="-130.53" y1="334.853" x2="885.493" y2="358.463" gradientUnits="userSpaceOnUse">
<stop stop-color="#1DFCF4"/>
<stop offset="1" stop-color="#00FFF6" stop-opacity="0.27"/>
</linearGradient>
<linearGradient id="paint20_linear_74_4867" x1="-131.827" y1="327.24" x2="883.618" y2="368.432" gradientUnits="userSpaceOnUse">
<stop stop-color="#1DFCF4"/>
<stop offset="1" stop-color="#00FFF6" stop-opacity="0.27"/>
</linearGradient>
<linearGradient id="paint21_linear_74_4867" x1="-132.969" y1="319.633" x2="881.598" y2="378.392" gradientUnits="userSpaceOnUse">
<stop stop-color="#1DFCF4"/>
<stop offset="1" stop-color="#00FFF6" stop-opacity="0.27"/>
</linearGradient>
<linearGradient id="paint22_linear_74_4867" x1="-133.957" y1="312.034" x2="879.433" y2="388.344" gradientUnits="userSpaceOnUse">
<stop stop-color="#1DFCF4"/>
<stop offset="1" stop-color="#00FFF6" stop-opacity="0.27"/>
</linearGradient>
<linearGradient id="paint23_linear_74_4867" x1="-134.79" y1="304.447" x2="877.125" y2="398.284" gradientUnits="userSpaceOnUse">
<stop stop-color="#1DFCF4"/>
<stop offset="1" stop-color="#00FFF6" stop-opacity="0.27"/>
</linearGradient>
</defs>
</svg>

  `;

  const Svg = () => <SvgXml xml={svgMarkup} />;
  return <Svg />;
}
