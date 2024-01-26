import { memo } from 'react';
import type { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import resets from '../_resets.module.css';
import { ButtonPrimary } from './ButtonPrimary/ButtonPrimary.js';
import { CardBlog1 } from './CardBlog1/CardBlog1.js';
import { DividerIcon } from './DividerIcon.js';
import { Ellipse8Icon } from './Ellipse8Icon.js';
import { Group2Icon } from './Group2Icon.js';
import { Group23Icon } from './Group23Icon.js';
import { Group25Icon } from './Group25Icon.js';
import { Group26Icon } from './Group26Icon.js';
import { Group27Icon } from './Group27Icon.js';
import classes from './LandingPage.module.css';
import { Rectangle4Icon } from './Rectangle4Icon.js';

interface Props {
  className?: string;
  hide?: {
    rectangle3?: boolean;
    rectangle32?: boolean;
    rectangle33?: boolean;
    rectangle34?: boolean;
  };
}
/* @figmaId 5521:1301 */
export const LandingPage: FC<Props> = memo(function LandingPage(props = {}) {
  const navigate = useNavigate();
  return (
    <div className={`${resets.clapyResets} ${classes.root}`} style={{width: "100%"}}>
      <div className={classes.naviationLeft} style={{width: "100%"}}>
        <div className={classes.background3}></div>
        <ButtonPrimary
          className={classes.buttonPrimary}
          classes={{ background: classes.background }}
          text={{
            text: <div className={classes.text}>Sign Up</div>,
          }}
        />
        <div className={classes.link}>Help</div>
        <div onClick={() => {navigate('/login');}} className={classes.link2}>Login</div>
        <div className={classes.link3}>Solutions</div>
        <div className={classes.link4}>Feature</div>
        <div className={classes.link5}>Template</div>
        <div className={classes.link6}>Resource</div>
        <div className={classes.logo}>Responsly</div>
      </div>
      <div className={classes.heroCenter} style={{width: "100%"}}>
        <div className={classes.background4} style={{width: "100%"}}></div>
        <ButtonPrimary
          className={classes.buttonPrimary2}
          classes={{ background: classes.background2 }}
          text={{
            text: <div onClick={() => {navigate('/login');}} className={classes.text2}>Start free trial</div>,
          }}
        />
        <div className={classes.title}>AI Survey Question Generator</div>
        <div className={classes.ellipse8}>
          <Ellipse8Icon className={classes.icon} />
        </div>
        <div className={classes.generateSurveysFormsQuizzesTes}>
          Generate Surveys, Forms, Quizzes, Test and Questionnaires with AI. Just describe the topic and we will do the
          rest. Check it in action ⤵️
        </div>
      </div>
      <div className={classes.group2}>
        <Group2Icon className={classes.icon2} />
      </div>
      <div className={classes.group23}>
        <Group23Icon className={classes.icon3} />
      </div>
      <div className={classes.footerCenter} style={{width: "100%"}}>
        <div className={classes.background5}></div>
        <div className={classes.logo2}>Responsly</div>
        <div className={classes.copyright}>© 2010 — 2020</div>
        <div className={classes.link7}>Privacy — Terms</div>
        <div className={classes.divider}>
          <DividerIcon className={classes.icon4} />
        </div>
        <div className={classes.link8}>Product</div>
        <div className={classes.link9}>Features</div>
        <div className={classes.link10}>Resources</div>
        <div className={classes.link11}>About</div>
        <div className={classes.link12}>Blog</div>
        <div className={classes.link13}>Support</div>
      </div>
      <div className={classes.testimonial} style={{width: "100%"}}>
        <div className={classes.background6}></div>
        <div className={classes.fileNavigation}>
          <div className={classes.aISurveyGeneratorFAQ}>AI Survey Generator FAQ</div>
          <div className={classes.links}>
            <div className={classes.howQuickAISurveyGenerationTake}>
              <ul className={classes.list}>
                <li>
                  <div className={classes.textBlock}>How quick AI survey generation takes?</div>
                </li>
              </ul>
            </div>
            <div className={classes.canIGenerateAQuestionnaireWith}>
              <ul className={classes.list2}>
                <li>
                  <div className={classes.textBlock2}>Can I generate a questionnaire with AI?</div>
                </li>
              </ul>
            </div>
            <div className={classes.whyUseAnAISurveyQuestionGenera}>
              <ul className={classes.list3}>
                <li>
                  <div className={classes.textBlock3}>Why Use an AI Survey Question Generator?</div>
                </li>
              </ul>
            </div>
            <div className={classes.canIGenerateAQuizWithAI}>
              <ul className={classes.list4}>
                <li>
                  <div className={classes.textBlock4}>Can I generate a quiz with AI?</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.postsTall} style={{width: "100%"}}>
        <div className={classes.rectangle5}></div>
        <div className={classes.freeAIQuestionnaireMakerWithSp}>Free AI Questionnaire maker with sparks ✨</div>
        <CardBlog1
          className={classes.cardBlog1}
          classes={{ rectangle: classes.rectangle }}
          hide={{
            rectangle3: true,
          }}
          text={{
            specialFeature: <div className={classes.specialFeature}>Automated Survey Creation</div>,
            seeMore: <div className={classes.seeMore}>See More ›</div>,
          }}
        />
        <CardBlog1
          className={classes.cardBlog12}
          classes={{ rectangle: classes.rectangle2 }}
          hide={{
            rectangle3: true,
          }}
          text={{
            specialFeature: <div className={classes.specialFeature2}>Intelligent Customization</div>,
            seeMore: <div className={classes.seeMore2}>See More ›</div>,
          }}
        />
        <CardBlog1
          className={classes.cardBlog13}
          classes={{ rectangle: classes.rectangle3 }}
          hide={{
            rectangle3: true,
          }}
          text={{
            specialFeature: <div className={classes.specialFeature3}>Device-Optimized Layout</div>,
            seeMore: <div className={classes.seeMore3}>See More ›</div>,
          }}
        />
        <CardBlog1
          className={classes.cardBlog14}
          classes={{ rectangle: classes.rectangle4 }}
          hide={{
            rectangle3: true,
          }}
          text={{
            specialFeature: <div className={classes.specialFeature4}>Adaptive Logic</div>,
            seeMore: <div className={classes.seeMore4}>See More ›</div>,
          }}
        />
      </div>
      <div className={classes.testimonial2} style={{width: "100%"}}>
        <div className={classes.background7}></div>
        <div className={classes.personName}>Alicja Zborowska, Administration Specialist</div>
        <div className={classes.quoteText}>
          Responsly Employee Experience platform helps us to manage employee satisfaction and communication within our
          organization.
        </div>
        <div className={classes.rectangle42}>
          <Rectangle4Icon className={classes.icon5} />
        </div>
      </div>
      <div className={classes.group25}>
        <Group25Icon className={classes.icon6} />
      </div>
      <div className={classes.postsBlogTop} style={{width: "100%"}}>
        <div className={classes.rectangle6}></div>
        <div className={classes.background8}></div>
        <div className={classes.link14}>Read More</div>
        <div className={classes.summary}>
          Pass the information you know to the form and display it where you want. You can personalize the form by
          welcoming people with their name, or leave a promo code after they complete the survey.
        </div>
        <div className={classes.title2}>Hidden variables</div>
        <div className={classes.background9}></div>
        <div className={classes.link15}>Read More</div>
        <div className={classes.summary2}>
          Create multiple translations for a single survey. Allow respondents to select their preferred language or
          switch between languages. You can also automate translations by using translation services.
        </div>
        <div className={classes.title3}>Multilingual surveys</div>
        <div className={classes.background10}></div>
        <div className={classes.title4}>
          <div className={classes.textBlock5}>Beautifully crafted survey builder</div>
          <div className={classes.textBlock6}>
            <p></p>
          </div>
        </div>
        <div className={classes.media}></div>
      </div>
      <div className={classes.group26} >
        <Group26Icon className={classes.icon7} />
      </div>
      <div className={classes.group27}>
        <Group27Icon className={classes.icon8} />
      </div>
    </div>
  );
});
