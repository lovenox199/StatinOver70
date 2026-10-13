// EDIT SLIDE CONTENT HERE. Slides are in presentation order.
// body supports HTML; notes are visible through the Notes button.
// Keep layout, ref, and masked-answer keys intact unless changing behavior.

const slides = [
  // SLIDE 1: Statins After 70
  {
    section: "Welcome",
    title: "Statins After 70",
    question: "Cardiovascular events, independence, and dementia",
    steps: [],
    notes:
      "Aim: appraise STAREE and use a short observational meta-analysis discussion to clarify dementia harm versus dementia prevention. Designed for about 30 minutes. Ask first, allow discussion, then reveal each answer. Keyboard: Space reveals; right arrow advances after the slide is fully revealed; N opens notes; O opens outline.",
    ref: "staree",
    layout: "cover",
  },

  // SLIDE 2: Why was STAREE needed?
  {
    section: "Introduction",
    title: "Why was STAREE needed?",
    question:
      "What remains uncertain about initiating statins in older adults?",
    steps: [
      {
        label: "Evidence",
        title: "",
        body: `<ul class="answerBullets">
    <li>Statins prevent cardiovascular events</li>
    <li>Less evidence for <strong>starting primary prevention in older adults</strong></li>
    <li>Especially uncertain <strong>after age 75</strong></li>
  </ul>`,
      },
      {
        label: "Independence",
        title: "",
        body: `<ul class="answerBullets">
    <li>Preventing cardiovascular disease is only part of the goal</li>
    <li>Can treatment extend survival <strong>without dementia or persistent disability?</strong></li>
  </ul>`,
      },
      {
        label: "Safety",
        title: "",
        body: `<ul class="answerBullets">
    <li>Older patients often take several medications and have other health conditions</li>
    <li>“Does starting a statin help enough to justify another daily medication and its possible side effects?”</li>
    <li>Weight <strong>cardiovascular benefit against side effects</strong></li>
  </ul>`,
      },
    ],
    notes:
      "Background described by the authors, rather than a review of current guidelines. Distinguish primary prevention from secondary prevention. Frame the patient-centered endpoints as a reason this trial is valuable. Do not imply that age alone mandates treatment. Source: STAREE introduction, pp. 1259-1260.",
    ref: "staree",
    layout: "cards",
  },

  // SLIDE 3: What question did the trial ask?
  {
    section: "Introduction",
    title: "What question did the trial ask?",
    question: "What were the investigators trying to establish?",
    steps: [
      {
        label: "Population",
        title: "",
        body: `<strong>{{total}}</strong> independent adults aged ≥70, without cardiovascular disease, diabetes, or dementia.<br>
    <br>
    <strong>{{statin}}</strong> assigned atorvastatin.<br>
    <strong>{{placebo}}</strong> assigned placebo.`,
      },
      {
        label: "Comparison",
        title: "",
        body: `Does atorvastatin, targeting <strong>40 mg daily</strong>, reduce major cardiovascular events or improve disability-free survival compared with placebo?<br>
    <br>
    Median follow-up: <strong>{{followup}}</strong>.`,
      },
    ],
    notes:
      "PICO: adults ≥70; atorvastatin vs placebo; two co-primary composites. The trial assesses initiation in this selected population. These findings do not directly answer whether to stop a statin in someone already taking one. STAREE abstract and methods.",
    ref: "staree",
    layout: "inline",
    maskedAnswers: {
      total: {
        value: "9,971",
        label: "total participants",
      },
      statin: {
        value: "4,984",
        label: "atorvastatin group size",
      },
      placebo: {
        value: "4,987",
        label: "placebo group size",
      },
      followup: {
        value: "5.9 years",
        label: "median follow-up duration",
      },
    },
  },

  // SLIDE 4: Who was eligible?
  {
    section: "Population",
    title: "Who was eligible?",
    question: "Which patients could, and could not, participate?",
    steps: [
      {
        label: "Eligibility",
        title: "",
        body: `<ul class="answerBullets">
    <li><strong>Age ≥70</strong></li>
    <li>Community dwelling and independent</li>
    <li>Cognition, daily function, and labs screened</li>
  </ul>`,
      },
      {
        label: "Exclusions",
        title: "",
        body: `<ul class="answerBullets">
    <li>No baseline <strong>CVD, diabetes, or dementia</strong></li>
    <li>No other life-limiting conditions</li>
    <li>CVD exclusions: MI, angina, heart failure, stroke/TIA, PAD, or coronary procedures</li>
  </ul>`,
      },
    ],
    notes:
      "Ask who in your practice would be excluded. Cardiovascular exclusion also included carotid stenosis and abdominal aortic aneurysm. Baseline screening included cognitive testing and modified Katz ADL assessment. Living independently does not mean every participant had no difficulty in any ADL. STAREE p. 1261.",
    ref: "staree",
    layout: "cards",
  },

  // SLIDE 5: How were participants recruited?
  {
    section: "Recruitment",
    title: "How were participants recruited?",
    question:
      "Where were participants found, and what happened before randomization?",
    steps: [
      {
        label: "Recruitment",
        title: "",
        body: `<ul class="answerBullets">
    <li><strong>1,013 Australian general practices</strong></li>
    <li>Metropolitan, regional, and rural areas</li>
    <li>Enrollment: <strong>July 2015-March 2023</strong></li>
  </ul>`,
      },
      {
        label: "Screening",
        title: "",
        body: `<ul class="answerBullets">
    <li><strong>Two visits, four weeks apart</strong></li>
    <li>Cognition, daily activities, and labs assessed</li>
    <li>Placebo run-in tested <strong>adherence</strong>, not statin tolerability</li>
  </ul>`,
      },
    ],
    notes:
      "Recruitment occurred July 2015-March 2023. There were 1,583 registered practices; 1,013 identified participants. The run-in used placebo, not atorvastatin: it assesses pill adherence, not statin tolerability. Consider selection toward people willing and able to follow a trial regimen. STAREE methods p. 1261.",
    ref: "staree",
    layout: "cards",
  },

  // SLIDE 6: What was the study design?
  {
    section: "Methods",
    title: "What was the study design?",
    question: "How were participants assigned, and who knew the assignment?",
    steps: [
      {
        label: "Design",
        title: "",
        body: `<ul class="answerBullets">
    <li><strong>Double-blind, randomized, placebo-controlled</strong></li>
    <li>Web-based <strong>1:1 assignment</strong></li>
    <li>Randomization schedule: independent statistician</li>
    <li>Identical tablets; blinded endpoint adjudication</li>
  </ul>`,
      },
    ],
    notes:
      "Ask what randomization protects against and what blinding protects against. The main article does not provide all allocation concealment mechanics; the protocol and supplement would be needed for further detail. It was investigator initiated, with no commercial or industry involvement. STAREE pp. 1260-1261.",
    ref: "staree",
    layout: "cards",
  },

  // SLIDE 7: What treatment and follow-up were used?
  {
    section: "Methods",
    title: "What treatment and follow-up were used?",
    question: "Was everyone immediately given atorvastatin 40 mg?",
    steps: [
      {
        label: "Treatment",
        title: "",
        body: `<ul class="answerBullets">
    <li>Atorvastatin <strong>20 mg daily for four weeks</strong></li>
    <li>Increase to <strong>40 mg if tolerated</strong></li>
    <li>Matching placebo in control group</li>
    <li>Dose adjustments allowed for side effects</li>
  </ul>`,
      },
      {
        label: "Followup",
        title: "",
        body: `<ul class="answerBullets">
    <li>Visits <strong>every six months</strong></li>
    <li>Median follow-up: <strong>5.9 years</strong></li>
    <li>Usual clinicians could start open-label statins</li>
    <li>Assigned trial treatment then stopped</li>
  </ul>`,
      },
    ],
    notes:
      "Median follow-up 5.9 years. Atorvastatin 40 mg is commonly classed as high-intensity therapy, but observed LDL reduction here was ~38%, influenced by adherence and open-label statin use. Avoid treating assigned dose as actual continuous exposure. STAREE p. 1261.",
    ref: "staree",
    layout: "cards",
  },

  // SLIDE 8: What were the two primary endpoints?
  {
    section: "Methods",
    title: "What were the two primary endpoints?",
    question: "Can you name the components of both primary endpoints?",
    steps: [
      {
        label: "Cardiovascular",
        title: "",
        body: `<div class="bulletIntro">First occurrence of:</div><ul class="answerBullets">
    <li>Cardiovascular death</li>
    <li>Nonfatal myocardial infarction</li>
    <li>Nonfatal stroke</li>
    <li>Coronary revascularization</li>
  </ul>`,
      },
      {
        label: "Independence",
        title: "",
        body: `<div class="bulletIntro">First occurrence of:</div><ul class="answerBullets">
    <li>Death from any cause</li>
    <li>Dementia</li>
    <li>Persistent physical disability</li>
  </ul><div class="bulletNote">Composite for <strong>disability-free survival</strong>.</div>`,
      },
    ],
    notes:
      "Discuss whether components have equal importance. Coronary revascularization is different from death or stroke. Disability-free survival is survival without the composite events, not a direct measure of every aspect of quality of life. Figure 1 describes first occurrence. Detailed dementia and disability definitions are in the protocol/supplement. STAREE pp. 1261-1262.",
    ref: "staree",
    layout: "cards",
  },

  // SLIDE 9: How were the results analyzed?
  {
    section: "Methods",
    title: "How were the results analyzed?",
    question:
      "If someone stopped the assigned tablet, did they switch analysis groups?",
    steps: [
      {
        label: "Analysis",
        title: "",
        body: `<ul class="answerBullets">
    <li><strong>Intention-to-treat</strong></li>
    <li>Analyzed in assigned groups, even after stopping treatment</li>
    <li>Cox regression: <strong>HRs and 95% CIs</strong></li>
  </ul>`,
      },
      {
        label: "Testing",
        title: "",
        body: `<ul class="answerBullets">
    <li>Cardiovascular endpoint tested first: <strong>α = 0.05</strong></li>
    <li>If significant, test disability-free survival</li>
    <li>Secondary CIs: <strong>no adjustment for multiple comparisons</strong></li>
  </ul>`,
      },
    ],
    notes:
      "A closed testing procedure addressed the two primary endpoints. Secondary endpoint confidence intervals were not adjusted for multiplicity. Cause-specific hazard ratios were used; cumulative incidence accounted for competing deaths. ITT preserves the comparison created by randomization, but estimates assignment rather than perfect adherence. Planned power: 619 cardiovascular and 1397 disability-free events; observed 709 and 1313. STAREE p. 1262.",
    ref: "staree",
    layout: "cards",
  },

  // SLIDE 10: Who actually participated?
  {
    section: "Population",
    title: "Who actually participated?",
    question: "How closely does this group resemble our clinic?",
    steps: [
      {
        label: "Age",
        title: "",
        body: `<ul class="answerBullets">
    <li>Mean age: <strong>74.7 years</strong></li>
    <li><strong>51.9%</strong> women</li>
    <li>About <strong>40%</strong> aged ≥75</li>
    <li>Only <strong>4.1%</strong> aged ≥85</li>
  </ul>`,
      },
      {
        label: "Baseline",
        title: "",
        body: `<ul class="answerBullets">
    <li><strong>98.3%</strong> White</li>
    <li>Mean LDL: <strong>126.6 mg/dL</strong></li>
    <li>Mean BP: <strong>~136/80 mm Hg</strong></li>
    <li>Median medications: <strong>2</strong>; 19.6% took ≥5</li>
  </ul>`,
      },
    ],
    notes:
      "59.7% were 70-74; 25.1% 75-79; 11.2% 80-84; 4.1% ≥85. Median medication count 2; 19.6% took at least five medications. 46.1% reported baseline muscle symptoms, helpful context when interpreting treatment-related muscle complaints. Do not generalize equally to all frail adults over 85. STAREE Table 1 and results pp. 1262-1264.",
    ref: "staree",
    layout: "cards",
  },

  // SLIDE 11: Did cardiovascular events decrease?
  {
    section: "Results",
    title: "Did cardiovascular events decrease?",
    question: "What happened over a median of 5.9 years?",
    steps: [
      {
        label: "Events",
        title: "",
        body: `<strong>Atorvastatin:</strong> 297 events<br>
    10.9 per 1,000 person-years<br>
    <br>
    <strong>Placebo:</strong> 412 events<br>
    15.5 per 1,000 person-years`,
      },
      {
        label: "Hazard",
        title: "",
        body: `<strong>HR 0.70</strong><br>
    95% CI 0.61-0.82<br>
    P&lt;0.001<br>
    <br>
    A <strong>30% lower event hazard</strong>, not a 30-percentage-point absolute risk reduction.`,
      },
      {
        label: "Benefit",
        title: "",
        body: `The authors report an <strong>NNT of 37 over approximately 5.9 years</strong> to prevent one major cardiovascular event.<br>
    <br>
    This endpoint includes coronary revascularization as well as death, MI, and stroke.`,
      },
    ],
    notes:
      "Let the room interpret HR before revealing the explanation. Hazard compares event rates at a given time among people still at risk; it is not a 30-percentage-point absolute risk reduction. NNT is the authors’ reported time-to-event estimate; simple crude event proportions yield a different NNT because follow-up and censoring matter. The primary composite includes coronary revascularization. STAREE Table 2, Figure 1A, p. 1264.",
    ref: "staree",
    layout: "cards",
  },

  // SLIDE 12: Did disability-free survival improve?
  {
    section: "Results",
    title: "Did disability-free survival improve?",
    question:
      "Did fewer cardiovascular events translate into longer disability-free survival?",
    steps: [
      {
        label: "Events",
        title: "",
        body: `<strong>Atorvastatin:</strong> 637 participants with events<br>
    21.6 per 1,000 person-years<br>
    <br>
    <strong>Placebo:</strong> 676 participants with events<br>
    23.0 per 1,000 person-years`,
      },
      {
        label: "Interpretation",
        title: "",
        body: `<strong>HR 0.94</strong><br>
    95% CI 0.84-1.05 · P=0.25<br>
    <br>
    No statistically significant improvement. The interval allows approximately <strong>16% lower to 5% higher hazard</strong>; this does not prove equivalence.`,
      },
    ],
    notes:
      "The CI spans approximately 16% lower to 5% higher hazard. The observed 1313 composite events were fewer than the planned 1397. About 80% of deaths were from noncardiovascular causes; this may help explain why fewer CV events did not translate into the broader endpoint. This explanation is an interpretation, not a separate proven causal mechanism. STAREE Table 2 and discussion.",
    ref: "staree",
    layout: "cards",
  },

  // SLIDE 13: Which events drove the cardiovascular benefit?
  {
    section: "Results",
    title: "Which events drove the cardiovascular benefit?",
    question: "Did every component improve equally?",
    steps: [
      {
        label: "Benefit",
        title: "",
        body: `<strong>Fatal or nonfatal MI:</strong><br>
    HR 0.57 (95% CI 0.43-0.75)<br>
    <br>
    <strong>Coronary revascularization:</strong><br>
    HR 0.57 (0.45-0.72)<br>
    <br>
    These outcomes mainly drove the composite benefit.`,
      },
      {
        label: "Uncertainty",
        title: "",
        body: `<strong>Cardiovascular death:</strong> HR 1.00 (0.72-1.37)<br>
    <strong>Stroke:</strong> HR 0.87 (0.68-1.11)<br>
    <br>
    Neither demonstrated a significant reduction. Component analyses were not adjusted for multiplicity.`,
      },
    ],
    notes:
      "Cardiovascular death 74 vs 74. All-cause death HR 0.91 (0.79-1.04), also no demonstrated mortality reduction. Secondary analyses describe the pattern; do not present every apparent subgroup or component difference as independently confirmed. Counts for individual endpoints need not sum to the primary composite because participants can have multiple event types. STAREE Table 2.",
    ref: "staree",
    layout: "cards",
  },

  // SLIDE 14: What adverse effects were reported?
  {
    section: "Safety",
    title: "What adverse effects were reported?",
    question: "Were treatment-related adverse events the same in both groups?",
    steps: [
      {
        label: "Serious",
        title: "",
        body: `<strong>Trial-related serious adverse events:</strong><br>
    2.7% in both groups.<br>
    <br>
    These are events judged related to the trial regimen, <strong>not all serious illness during follow-up</strong>.`,
      },
      {
        label: "Symptoms",
        title: "",
        body: `<strong>Atorvastatin vs placebo:</strong><br>
    <br>
    Musculoskeletal: <strong>32.0% vs 29.4%</strong><br>
    Hepatobiliary: <strong>3.3% vs 0.9%</strong><br>
    Diabetes-related: <strong>4.0% vs 2.7%</strong><br>
    <br>
    These categories do not all represent severe disease.`,
      },
      {
        label: "Stopping",
        title: "",
        body: `Stopped assigned treatment due to adverse events:<br>
    <strong>7.2% vs 6.1%</strong>.<br>
    <br>
    Safety analysis included participants who received ≥1 dose: <strong>4,876 atorvastatin; 4,847 placebo</strong>.`,
      },
    ],
    notes:
      "IMPORTANT: Table 3 includes events judged by trial physicians to be related to the trial regimen, not all serious illness or hospitalization over six years. Safety population: 4876 atorvastatin, 4847 placebo, all who received ≥1 dose. Any trial-related AE 63.0% vs 58.7%; medically important AE 8.8% vs 6.7%. Hepatobiliary category is not synonymous with liver failure; diabetes-related events are not all confirmed incident diabetes. STAREE Table 3.",
    ref: "staree",
    layout: "cards",
  },

  // SLIDE 15: Did participants remain on assigned treatment?
  {
    section: "Appraisal",
    title: "Did participants remain on assigned treatment?",
    question:
      "Does randomized assignment mean six years of continuous treatment?",
    steps: [
      {
        label: "Persistence",
        title: "",
        body: `At five years:<br>
    <br>
    <strong>55.6%</strong> of the atorvastatin group and <strong>47.0%</strong> of the placebo group remained on assigned treatment.<br>
    <br>
    The most cited discontinuation reason was participant unwillingness.`,
      },
      {
        label: "Crossover",
        title: "",
        body: `Estimated open-label statin use at five years:<br>
    <strong>9.4% atorvastatin; 19.4% placebo</strong>.<br>
    <br>
    Discontinuation and crossover may dilute the contrast, but intention-to-treat preserves the randomized comparison.`,
      },
    ],
    notes:
      "The most cited reason for discontinuation was participant unwilling (15.6% vs 16.2%), rather than adverse events (7.2% vs 6.1%). Do not add open-label percentages to adherence percentages as if they are necessarily disjoint snapshots. The authors’ estimate of attenuated effects is plausible; it does not justify asserting a specific larger benefit under perfect adherence. STAREE p. 1264 and discussion.",
    ref: "staree",
    layout: "cards",
  },

  // SLIDE 16: How strong is the evidence?
  {
    section: "Appraisal",
    title: "How strong is the evidence?",
    question: "What strengthens the trial, and what limits its application?",
    steps: [
      {
        label: "Strengths",
        title: "",
        body: `<ul class="answerBullets">
    <li>Large, randomized, double-blind trial</li>
    <li>Blinded endpoint adjudication</li>
    <li>Clinically meaningful outcomes; long follow-up</li>
    <li>Vital status available for <strong>99.9%</strong></li>
    <li>No commercial or industry involvement</li>
  </ul>`,
      },
      {
        label: "Limitations",
        title: "",
        body: `<ul class="answerBullets">
    <li>Selected, independent adults; predominantly White</li>
    <li>No baseline CVD, diabetes, or dementia</li>
    <li>Discontinuation and crossover</li>
    <li>Some remote pandemic assessments</li>
    <li>Limited applicability to <strong>frail, medically complex adults</strong></li>
  </ul>`,
      },
    ],
    notes:
      "Vital status ascertainment was 99.9% by death-registry linkage, which is a strength for mortality but does not mean 99.9% complete ascertainment for every nonfatal outcome. Funded publicly; no industry involvement. Ask: would an 88-year-old frail patient with many comorbidities receive the same inference? Main article does not replace full protocol/supplement review. STAREE methods and discussion.",
    ref: "staree",
    layout: "cards",
  },

  // SLIDE 17: Do statins cause dementia?
  {
    section: "Dementia",
    title: "Do statins cause dementia?",
    question: "What can STAREE tell us about that concern?",
    steps: [
      {
        label: "STAREE",
        title: "",
        body: `Dementia occurred in <strong>290</strong> atorvastatin participants versus <strong>280</strong> placebo participants.<br>
    <br>
    <strong>HR 1.03</strong> · 95% CI 0.87-1.21<br>
    <br>
    No statistically significant difference.`,
      },
      {
        label: "Meaning",
        title: "",
        body: `STAREE did <strong>not demonstrate increased dementia or dementia prevention</strong>.<br>
    <br>
    The interval still permits some benefit or harm. Dementia is a different outcome from transient memory complaints.`,
      },
    ],
    notes:
      "Use this common concern as a discussion prompt. Dementia was a prespecified secondary endpoint and a component of the disability-free primary composite. Secondary CI not multiplicity adjusted. The interval allows 13% lower to 21% higher dementia hazard. Do not equate dementia with all transient memory complaints, which are a different clinical question. STAREE Table 2.",
    ref: "staree",
    layout: "cards",
  },

  // SLIDE 18: What dementia evidence did the review include?
  {
    section: "Supporting paper",
    title: "What dementia evidence did the review include?",
    question: "Does “meta-analysis” necessarily mean randomized evidence?",
    steps: [
      {
        label: "Evidence",
        title: "",
        body: `<ul class="answerBullets">
    <li><strong>55 observational studies</strong></li>
    <li><strong>7,786,651 participants</strong> across the review</li>
    <li>Cohort and case-control designs; no RCTs</li>
    <li>Varied populations, statins, and exposure durations</li>
  </ul>`,
      },
      {
        label: "Methods",
        title: "",
        body: `<ul class="answerBullets">
    <li>PubMed, Embase, and Cochrane searches</li>
    <li>Independent screening; Newcastle-Ottawa assessment</li>
    <li>Random-effects pooling; HR, OR, and RR pooled separately</li>
    <li>All-cause dementia HR analysis: <strong>32 studies</strong></li>
  </ul>`,
      },
    ],
    notes:
      "Keep this supporting section brief. Published January 2025, before the STAREE results. The full review’s >7 million sample is not the denominator of every analysis. Eligible studies included adults ≥18; statin types, treatment timing and follow-up varied. It does not specifically test initiation of atorvastatin 40 mg at ≥70. Review methods and section 3.2.",
    ref: "meta",
    layout: "cards",
  },

  // SLIDE 19: What did the meta-analysis find?
  {
    section: "Supporting paper",
    title: "What did the meta-analysis find?",
    question: "Was statin use linked to higher or lower dementia hazard?",
    steps: [
      {
        label: "Dementia",
        title: "",
        body: `<strong>All-cause dementia:</strong><br>
    HR 0.86 · 95% CI 0.82-0.91<br>
    <br>
    Statin use was <strong>associated with lower dementia hazard</strong>. This does not establish that statins prevent dementia.`,
      },
      {
        label: "Subtypes",
        title: "",
        body: `<strong>Alzheimer’s dementia:</strong><br>
    HR 0.82 (0.74-0.90)<br>
    <br>
    <strong>Vascular dementia:</strong><br>
    HR 0.89 (0.77-1.02)`,
      },
    ],
    notes:
      "The abstract reports dementia CI 0.82-0.91; main-text exact HR analysis reports 0.8578 (0.8168-0.9009), a small reporting discrepancy worth knowing. Use the abstract values displayed here consistently. The abstract wording implies reduced vascular dementia risk, but its CI includes 1 and P=0.093: do not call it a confirmed benefit. Avoid choosing rosuvastatin based on observational subgroup comparisons.",
    ref: "meta",
    layout: "cards",
  },

  // SLIDE 20: Why might the dementia findings differ?
  {
    section: "Discussion",
    title: "Why might the dementia findings differ?",
    question:
      "How can observational protection coexist with a neutral trial result?",
    steps: [
      {
        label: "Different People",
        title: "",
        body: `<ul class="answerBullets">
    <li>Statin users may have healthier habits and better preventive care</li>
    <li>Large samples do not eliminate confounding</li>
  </ul>`,
      },
      {
        label: "Different Timing",
        title: "",
        body: `<ul class="answerBullets">
    <li>The review included varied ages and treatment durations</li>
    <li>STAREE tested starting treatment after age 70</li>
    <li>Earlier treatment might matter, but that remains unproven</li>
  </ul>`,
      },
      {
        label: "Comparison",
        title: "",
        body: `<ul class="answerBullets">
    <li><strong>STAREE:</strong> HR 1.03 (0.87-1.21)</li>
    <li><strong>Review:</strong> HR 0.86 (0.82-0.91)</li>
    <li>CIs overlap; not a formal between-study comparison</li>
  </ul>`,
      },
    ],
    notes:
      "Ask whether sample size eliminates bias: it improves precision, not necessarily causal validity. Healthy-user bias and residual confounding are recognized in the review; exposure timing is a plausible explanation for differing results, not a proven mechanism. Publication-bias test for all-dementia HR: Egger P=0.0105. Confidence interval overlap is not itself a formal comparison test. Both studies leave dementia prevention unproven.",
    ref: "both",
    layout: "cards",
  },

  // SLIDE 21: What should we take back to clinic?
  {
    section: "Take home",
    title: "What should we take back to clinic?",
    question: "How would you respond to a patient worried about dementia?",
    steps: [
      {
        label: "Benefit",
        title: "",
        body: `<strong>Heart benefit? Yes, please.</strong><br>
    Atorvastatin reduced major cardiovascular events in older adults resembling the STAREE population.`,
      },
      {
        label: "Uncertainty",
        title: "",
        body: `<strong>A statin is not a fountain of youth.</strong><br>
    Improved disability-free survival and dementia prevention were not demonstrated.`,
      },
      {
        label: "Counseling",
        title: "",
        body: `<strong>“But the internet said…”</strong><br>
    “This trial didn’t show increased dementia. Let’s weigh the cardiovascular benefits, possible side effects, and what matters to you.”`,
      },
    ],
    notes:
      "Introduce the slide: “What are we taking back to clinic, besides these pumpkins?” Distinguish harm and benefit questions. No significant dementia increase does not prove zero risk. If a patient reports new cognitive symptoms, take them seriously and evaluate rather than dismissing them with a population-level result. No formal guideline recommendations or treatment threshold are added here. End by asking residents for one counseling change they will make.",
    ref: "both",
    layout: "rows",
  },

  // SLIDE 22: Source articles
  {
    section: "References",
    title: "Source articles",
    question: "Evidence used in this presentation",
    steps: [
      {
        title: "",
        body: `<a href="https://doi.org/10.1056/NEJMoa2607314" target="_blank" rel="noopener"><strong>Atorvastatin, Cardiovascular Events, and Disability-free Survival in Older Adults</strong></a><br>
    Zoungas S, et al. <em>New England Journal of Medicine.</em> 2026;395:1259-1272.<br>
    DOI: 10.1056/NEJMoa2607314.`,
        label: "STAREE",
      },
      {
        title: "",
        body: `<a href="https://doi.org/10.1002/trc2.70039" target="_blank" rel="noopener"><strong>Statin use and dementia risk: A systematic review and updated meta-analysis</strong></a><br>
    Westphal Filho FL, et al. <em>Alzheimer’s &amp; Dementia: Translational Research &amp; Clinical Interventions.</em> 2025;11:e70039.<br>
    DOI: 10.1002/trc2.70039.`,
        label: "Review",
      },
    ],
    notes:
      "The uploaded main articles were used to verify displayed numbers. Detailed endpoint definitions and some randomization mechanics require the STAREE protocol and supplement. The full talk is designed around article appraisal, without a separate guideline review.",
    ref: "both",
    layout: "references",
  },
];
