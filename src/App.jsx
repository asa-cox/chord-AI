import React, { useState } from 'react';
import { Upload, ChevronDown, ChevronUp, AlertCircle, CheckCircle, AlertTriangle, X, Play, Info, List, FileText, GitBranch } from 'lucide-react';

// CHORD CONSENT ASSESSMENT & SCOPING APP
// Now includes workflow router logic from workflow_router.md


// STATIC ASSESSMENT DATA - Auto-generated from Word docs
const STATIC_ASSESSMENT_DATA = [{"title": "TITLE DETAILS & CONSENT SUMMARY", "sections": [{"heading": "REVIEW SUMMARY", "content": [{"type": "paragraph", "text": "KEY ITEM ASSESSMENT"}, {"type": "table", "data": [["Application Complete", "Yes (with minor clarifications recommended)"], ["RFI required", "No (application substantially complete under s88)"], ["Activity Status", "Restricted Discretionary Activity"], ["District Plan Infringements", "Rear yard setback (D18.6.1.3) - eastern and northern boundaries\nCoastal protection yard (H3.6.8) - northern boundary\nLandscaped area (D18.6.1.5) - 32.8% provided vs 40% required\nPaved area (D18.6.1.6) - 29% vs 25% maximum\nImpervious area (H3.6.9) - 65% vs 60% maximum"], ["Other Infringements", "None identified beyond district plan standards"], ["Section 88 acceptance", "Application meets s88 requirements and can be accepted for processing"], ["Likelihood of Notification", "Public notification: Not required (s95A assessment indicates no more than minor effects)\nLimited notification: Not required (no affected persons identified; infringements are minor roof overhangs and driveway paving within site boundaries)"], ["Planning Pathway", "Medium complexity\nSpecial Character Area overlay assessment required\nBuilt Heritage specialist input recommended\nCoastal Erosion Hazard Area assessment provided\nStandard processing pathway with internal specialist review"], ["Is the Application Acceptable For Processing?", "\u2611 Yes / \u2610 No"]]}, {"type": "paragraph", "text": "TITLE DETAILS"}, {"type": "table", "data": [["Supplied", "Yes", ""], ["Dated Within 3 Months?", "To be confirmed", "Flag for planner: Recommend checking certificate of title search date"], ["Easements", "Yes", "Easement 'A' for right of way shared with 36A Cheltenham Road; pedestrian access easement to north. Both shown on plans. Flag for planner to verify easement documentation attached."], ["Building Line Restriction", "Not identified", "Not identified on title or in application documents"], ["Consent Notices", "Not identified", "Recommend planner verification"], ["Covenant", "Not identified", "Not identified in application materials"], ["Encumbrance", "Yes", "\u00bd share Lot 3 DP 92717 noted - this relates to shared ROW. Recommend planner verification of any other encumbrances."]]}]}, {"heading": "CONSENT DETAILS", "content": [{"type": "table", "data": [["Consent type applied for:", "Land Use Consent (Restricted Discretionary Activity)"], ["National Environmental Standards:", "NES for Assessing and Managing Contaminants in Soil to Protect Human Health - Not applicable based on site characteristics and proposal. Other NES - Not applicable."], ["Land use type:", "Alterations and additions to existing dwelling, including new first floor level"], ["Subdivision type:", "N/A - not a subdivision application"]]}]}, {"heading": "DISTRICT PLAN SEARCH", "content": [{"type": "table", "data": [["Zone", "Residential - Single House Zone (H3)"], ["Overlays", "Special Character Areas Overlay - Residential (North Shore Devonport and Stanley Point) (D18)\nRegionally Significant Volcanic Viewshafts and Height Sensitive Areas Overlay - T1 Rangitoto Island Viewshafts (D14)\nRegionally Significant Volcanic Viewshafts and Height Sensitive Areas Overlay - Mount Victoria Height Sensitive Areas (D14)"], ["Controls", "Height control: 8m maximum (complies)\nHeight in relation to boundary (complies)\nBuilding coverage: Maximum varies by overlay - proposal at 32.8% (reduced from existing 34%)\nRear yard setbacks: 3m in Special Character Area (D18.6.1.3) - infringements noted\nCoastal protection yard: 3m (H3.6.8) - minor infringement noted\nLandscaped area: 40% minimum required (D18.6.1.5) - 32.8% provided\nPaved area: 25% maximum (D18.6.1.6) - 29% proposed\nImpervious area: 60% maximum (H3.6.9) - 65% proposed"], ["Designations/Notations", "Coastal Erosion Hazard Area (CEHA) (E36) - site is within 40m of MHWS and at elevation less than 7m above MHWS\nForeshore Yard Reference Line noted on plans (Map 3H)\nNo scheduled heritage buildings on site (though located in Special Character Area)"], ["Plan Changes", "Plan Change 78 (notified 18 August 2022) proposes Residential Low Density zone and retains Special Character Area overlay as qualifying matter. Hearings paused - resumption expected mid-2025. Recommend processing under operative AUP as PC78 not yet operative. Flag for planner awareness regarding potential future status changes."]]}, {"type": "paragraph", "text": "Site Controls of Significance (may require specific assessment)"}, {"type": "table", "data": [["Heritage Notation", "No", "Not a scheduled heritage building. However, house located within Special Character Areas Overlay - Residential (North Shore Devonport and Stanley Point). Built c.1923, significantly altered 1992."], ["Heritage Area", "Yes", "Special Character Areas Overlay - Residential (North Shore Devonport and Stanley Point) applies to entire site and surrounds."], ["Heritage NZ Listing", "No", "None identified"], ["Site of Significance to M\u0101ori", "No", "None identified on GIS layers. However, recommend mana whenua consultation consideration given coastal location and CEHA."], ["Relevant Iwi", "N/A", "Ng\u0101ti Paoa, Ng\u0101ti Wh\u0101tua \u014cr\u0101kei, Ng\u0101ti Wh\u0101tua o Kaipara, Ng\u0101i Tai ki T\u0101maki, Te \u0100kitai Waiohua - all have interests in Waitemat\u0101 Harbour coastal areas. Recommend planner review for consultation requirements."], ["Contaminated Land Detail", "No", "HAIL assessment not triggered based on historical residential use since 1923 and no industrial/commercial activities identified. Site not on Auckland Council's Selected Land Use Register (SLUR)."]]}, {"type": "paragraph", "text": "Site Characteristics Checklist"}, {"type": "table", "data": [["Characteristic", "Y/N", "AI Comment"], ["Flood Plain", "\u2610 Yes \u2611 No", "Site not identified on flood plain maps. Elevated position above beach. Airey report (pg 6) confirms site not in floodplain or flood prone area."], ["Natural Hazard", "\u2611 Yes \u2610 No", "Coastal location - CEHA applies. Coastal erosion and inundation hazards assessed by Airey Consultants Ltd (25 Oct 2024). Report concludes low risk due to elevation, setback from MHWS, and protection by retaining walls and pohutukawa. Substantial freeboard between ground floor and 1% AEP. Report provided - adequate assessment. Planner review required."], ["Overland Flow Path", "\u2610 Yes \u2611 No", "No overland flow paths identified crossing site on GIS. Flat topography."], ["Stream", "\u2610 Yes \u2611 No", "No streams on or adjacent to site."], ["Character Area", "\u2611 Yes \u2610 No", "Special Character Areas Overlay - Residential (North Shore Devonport and Stanley Point) (D18) applies. Assessment required and provided in AEE (sections 5.2, 6.1). Architectural statement by Geoff Richards provided. Proposal seeks to restore bungalow character compromised by 1992 alterations. Pre-app meeting (24 July 2024) with Built Heritage Specialist Blair Hastings recorded qualified support for approach."], ["Coastal Erosion", "\u2611 Yes \u2610 No", "CEHA overlay applies. Site within 40m of MHWS and below 7m elevation. Airey Coastal and Stormwater Assessment (Oct 2024) provided - assesses coastal erosion risk as very low due to sheltered location, protection by seawalls, established pohutukawa, and site retaining wall. Assessment adequate per E36.8.2(1).  Planner needs to review and expert council review."], ["Land Which may be subject to instability", "\u2610 Yes \u2611 No", "No land instability overlays identified. Site described as flat. No geotechnical concerns raised in application."], ["Geology", "\u2610 Yes \u2611 No", "Standard residential foundations anticipated. No rock breaking or geological constraints identified."], ["Contamination", "\u2610 Yes \u2611 No", "No HAIL activities identified. Residential use since 1923. Not on SLUR."], ["Treaty Settlements / statutory acknowledgements", "\u2611 Yes \u2610 No", "Coastal location may trigger Ng\u0101ti Wh\u0101tua \u014cr\u0101kei statutory acknowledgement over Waitemat\u0101 Harbour. No consultation documentation provided. Recommend planner review for s95E consultation requirements, though given minor scale of alterations and no change to coastal interface, may not trigger affected party status."], ["Notable Trees", "\u2610 Yes \u2611 No", "No notable trees scheduled on site in AUP. Some vegetation over 3m exists (shown in context photos) but not scheduled."], ["Other Feature", "\u2611 Yes \u2610 No", "Volcanic Viewshafts - T1 Rangitoto and Mt Victoria Height Sensitive Area overlays apply. Site at -30.5m contour (below viewshaft plane). Proposal complies with 8m zone height. D14.4.1(A3) triggered for buildings up to 9m in height within viewshaft = RDA. However, given negative contour value, actual viewshaft impact assessment not viable. Application correctly identifies this as reason for consent but acknowledges practical compliance. No landscape effects assessment required given impossibility of actual intrusion.  Planner check and review given feature trigger."]]}]}]}, {"title": "PRE-APPLICATION CHECK", "sections": [{"heading": "PRE-APPLICATION CHECK", "content": [{"type": "paragraph", "text": "1. APPLICATION TYPE AND FORMALITY CHECK"}, {"type": "table", "data": [["Check", "Assessment", "AI Comment"], ["Is the application formally lodged?", "\u2611 Yes / \u2610 No", "Application form completed and signed. Fee schedule reference to be confirmed by council."], ["Does the application clearly identify the site and activity?", "\u2611 Yes / \u2610 No", "Site: Lot 1 DP 92717 and \u00bd share Lot 3 DP 92717, 52 Cheltenham Road, Devonport. Legal description provided. Activity clearly described as alterations and additions to existing dwelling including new first floor."], ["Has the correct form of consent been applied for?", "\u2611 Yes / \u2610 No", "Land use consent correctly identified. Activity status as RDA confirmed (multiple triggers under D18 and H3)."]]}, {"type": "paragraph", "text": "2. DEEMED PERMITTED ACTIVITY SCREENING"}, {"type": "table", "data": [["Check", "Assessment", "AI Comment"], ["Could the activity qualify as a deemed permitted boundary activity? (Section 87BA)", "\u2610 Yes / \u2611 No", "Multiple rules infringed beyond boundary setbacks (landscaped area, paved area, impervious area, CEHA, Special Character alterations). Written approvals not obtained. Does not qualify for s87BA."], ["Could the activity qualify as a deemed permitted marginal/temporary breach? (Section 87BB)", "\u2610 Yes / \u2611 No", "Alterations include new first floor level and significant external changes. Not minor or temporary. Effects adequately addressed but not qualifying for s87BB pathway."], ["Proceed to full resource consent processing?", "\u2611 Yes / \u2610 No", "Standard RDA processing pathway confirmed."]]}, {"type": "paragraph", "text": "3. APPLICATION REDIRECTION CHECK"}, {"type": "table", "data": [["Check", "Assessment", "AI Comment"], ["Does this application relate to a permitted activity?", "\u2610 Yes / \u2611 No", "Multiple RDA triggers under D18 (Special Character alterations, yard infringements) and H3 (coastal protection yard, impervious area). Clearly requires resource consent."], ["Is the application missing core elements (e.g. no site plan, incorrect form)?", "\u2610 Yes / \u2611 No", "Application well-prepared with comprehensive plans (GRA sheets 100-907), AEE (18 pages), specialist coastal report, architectural statement, pre-app meeting minutes. Minor: confirm certificate of title date."], ["Is the applicant's cover letter or AEE unclear about what is being sought?", "\u2610 Yes / \u2611 No", "AEE clearly structured (17 pages + attachments). Proposal well-described in sections 1.1-3.1. Reasons for consent itemized in section 1.2. Assessment transparent."]]}, {"type": "paragraph", "text": "4. CHORD SYSTEM TRIGGER"}, {"type": "table", "data": [["Condition", "Assessment", "Action"], ["All pre-completeness checks passed", "\u2611 Yes / \u2610 No", "Proceed to Section 88 & Schedule 4 Review. Application substantially complete. Minor verification items noted (title date, encumbrances) can be addressed in processing without triggering s92 RFI."], ["Any unclear or incorrect status", "\u2610 Yes / \u2611 No", "Activity status correctly identified as RDA. All triggers properly identified in AEE para 1.2."]]}]}]}, {"title": "SECTION 88 CHECK", "sections": [{"heading": "APPLICATION REVIEW: SECTION 88 CHECK", "content": [{"type": "table", "data": [["Application Requirement", "Provided", "Comment"], ["Application Form - signed and completed", "Yes", "Form completed and signed by agent Cherie Lane on behalf of applicants David and Alex Rankin."], ["Current Title less than 3 months old", "Yes", "Flag for planner: Verify certificate of title search date within 3 months of lodgement date."], ["Associated title documentation if relevant", "N/A", "Easement documents should be verified by planner (Easement 'A' and pedestrian access easement)."], ["Name & Address of each", "Yes", "Applicants: David and Alex Rankin, 52 Cheltenham Road, Devonport. Agent: Cherie Lane, Lane Associates Ltd."], ["Section 127 Change: is the applicant the consent holder or has written holder authority?", "N/A", "Not a s127 variation application."], ["Marine and Coastal Area Act 2011: Evidence of notification to claimants", "N/A", "Not applicable - no customary marine title claims affecting this site."], ["Are any additional resource consents under section 87 RMA required?", "No", "All triggered activities identified in AEE para 1.2. No regional council consents required (discharge to ground via existing system)."], ["Description of site", "Yes", "Comprehensive site description in AEE section 2.1. Rear site, 914m\u00b2 nett area, flat topography, northern boundary to beach reserve, established 1981 from subdivision."], ["Description of proposal", "Yes", "Clear description in AEE sections 1.1 and 3.1. Alterations to existing house, new first floor level, re-roofing, internal reconfiguration, formalised driveway. Building coverage reduces from 34% to 32.8%."], ["Plans, suitably labelled", "Yes", "Excellent plan set by Geoff Richards Architects Ltd (sheets 100-907, dated 10 March 2025 R1). Includes: Existing and proposed site plans, topographical survey, town planning analysis (coverage, yards, HIRB), demolition elevations, floor plans (existing and proposed basement/ground/first/roof), all elevations, 3D renders. Plans clearly labeled, scaled 1:100/1:200, with north points, dimensions, site contours."], ["All reasons for consent identified", "Yes", "Comprehensively listed in AEE para 1.2: D18.4.1(A4) Special Character alterations; D18.6.1.3 rear yard (eastern and northern); H3.6.8 coastal protection yard (northern); D18.6.1.5 landscaped area; D18.6.1.6 paved area; H3.6.9 impervious area; D14.4.1(A3) volcanic viewshaft (though acknowledged as not viable to assess); E36.4.1(A2) CEHA external alterations increasing GFA."], ["Compliance or mitigation of breaches demonstrated adequately", "Yes", "Rear/coastal yard infringements: Minor roof overhang extensions only (0.219m-1.186m depths) - no change to building walls or footprint. Existing use rights for wall positions. AEE paras 5.3.1 and 6.2 explain minimal effects, spacious distance to boundaries, established screening. Landscaped/paved/impervious: Driveway formalisation necessary for functional access to garage (currently lawn). AEE paras 5.3.2 and 6.3 explain infringements absorbed within site amenity, no inter-site effects, private site with established boundaries. Building coverage: Improves from 34% to 32.8%. All other standards: Comply (HIRB, zone height, etc)."], ["AEE included (including affected persons)?", "Yes", "18-page AEE by Cherie Lane, October 2024."], ["Proper assessment against rules in District Plan including objectives and policies?", "Yes", "Zone assessment: H3 Single House objectives and policies addressed (AEE para 5.1) - maintains planned suburban character, 1-2 storey form, quality on-site amenity. SCAR assessment: D18 objectives/policies comprehensively assessed (paras 5.2, 6.1) - responds to character values, maintains/enhances built form, appropriate scale/design. Schedule 15.1.7.6 character statement values addressed - proposal restores bungalow form lost in 1992 alterations. CEHA: E36 policies addressed (para 6.4) - avoids/mitigates coastal hazard risks."], ["Has assessment against Part 2 of the RMA taken place?", "Yes", "AEE para 6.5 addresses Part 2 - sustainable management achieved through improved use of site in anticipated form, enables social/economic/cultural wellbeing of applicants. Section 5 purpose met."], ["Written approvals of affected persons if obtained", "No", "None obtained. AEE para 1.3 notification assessment concludes no affected persons due to: (1) rear/coastal yard infringements limited to small roof overhang portions, no impact on 36C Cheltenham Road (two-storey house, screened boundary, spacious separation); (2) landscaped/paved/impervious infringements internal to site, indiscernible to neighbours; (3) private site with established fencing/hedging on west/east/south; (4) no adverse effect on beach public realm (spaciousness/amenity unchanged). Assessment appears reasonable but recommend planner verification."]]}, {"type": "paragraph", "text": "Section 104(1)(b) assessment - relevant statutory documents:"}, {"type": "table", "data": [["Document", "Yes/No/N/A", "Comment"], ["(i) National environmental standard", "N/A", "No NES triggered. NES for Contaminants in Soil not applicable (no HAIL activities). Site characteristics and residential use do not engage other NES."], ["(ii) Other regulations", "N/A", "No other regulations identified as relevant."], ["(iii) National policy statement", "N/A", "NPS for Freshwater Management - not applicable (no watercourses/wetlands on site). NPS for Urban Development - acknowledged in AUP framework but not directly assessed (not required for RDA). NPS for Indigenous Biodiversity - not applicable (no significant indigenous vegetation/habitats)."], ["(iv) NZ coastal policy statement", "Yes", "NZCPS 2010 relevant given coastal site location. AEE para 5.4 addresses CEHA which implements NZCPS policies. Airey report (Oct 2024) specifically assesses coastal hazard risks per NZCPS Policy 25 (risk reduction). Proposal maintains appropriate setback from coastal edge, does not increase hazard risk, does not impede public access (site private, beach reserve separate). Limited direct assessment of NZCPS policies in AEE - recommend planner verify consistency with relevant coastal policies (particularly Policy 6 - activities in coastal environment; Policy 11 - indigenous biodiversity; Policy 13 - preservation of natural character). Given minor scale of alterations and no change to coastal interface, consistency likely but planner check required."], ["(v) Regional policy statement", "Yes", "Auckland Regional Policy Statement (RPS) incorporated into AUP. Relevant RPS objectives/policies embedded in AUP zone and overlay provisions assessed in AEE. Coastal environment management (B7) implemented through CEHA assessment. No separate RPS assessment required."], ["(vi) Plan or proposed plan", "Yes", "AUP(OP) comprehensively assessed throughout AEE (sections 5-6). Zone (H3), overlay (D18, E36, D14), and general rules (C1.9) all addressed. Plan Change 78 noted (para 5.5) but not operative - processing correctly under operative AUP."], ["Cultural effects assessment and/or engagement with Iwi / mana whenua if required?", "No", "No consultation documentation provided. AEE acknowledges coastal location. Given: (1) site privately owned since 1923; (2) no change to coastal interface/access; (3) no ground disturbance in coastal margin; (4) no Sites of Significance to M\u0101ori identified; (5) minor scale of alterations (within existing footprint except roof overhang); recommend planner assess whether mana whenua consultation warranted under s95E. If limited notification not required (no affected persons), then consultation may not be mandatory. However, given CEHA location and cultural values of Waitemat\u0101 coast, flag for planner consideration of whether courtesy notification to Ng\u0101ti Wh\u0101tua \u014cr\u0101kei, Ng\u0101ti Paoa appropriate."], ["Assessment against NZCPS (if relevant)", "Yes", "See (iv) above. CEHA assessment via Airey report addresses NZCPS Policy 25 coastal hazard risk reduction. Recommend planner verify consistency with NZCPS Policies 6, 11, 13 given coastal location, though effects minimal."], ["Schedule 4 of the RMA - all other relevant information provided as required?", "Yes", "Schedule 4 requirements addressed comprehensively (see detailed breakdown below)."]]}, {"type": "paragraph", "text": "ASSESSMENT OF ENVIRONMENTAL EFFECTS"}, {"type": "paragraph", "text": "AEE prepared by Cherie Lane (Lane Associates Ltd), October 2024, 18 pages plus attachments."}, {"type": "table", "data": [["AEE Component", "Yes/No/N/A", "Comment"], ["Assessment of actual and potential effects on the environment", "Yes", "Comprehensive effects assessment in AEE sections 1.3, 6.1-6.4: Special character effects (para 6.1, pgs 13-15): Detailed assessment against D18.8.2.1 criteria."], ["Any proposed mitigation measures", "Yes", "Mitigation inherent in design: Building coverage reduced (34% to 32.8%); Compliance with all bulk/location standards except minor yard/area infringements; Retention of existing boundary fencing/hedging (provides screening); Use of appropriate character materials/colours (match existing); Stormwater management via existing system (Airey report pg iii confirms adequate capacity). AEE para 1.3 states infringements \"able to be absorbed within internal amenity offered on site.\"  Mitigations to be checked and approved."], ["Identification of affected persons, any consultation and the response", "Yes", "AEE para 1.3 (pgs 3-5) provides detailed affected persons assessment: 36C Cheltenham Road (eastern neighbour): Minor roof overhang infringement to shared boundary. Two-storey house on neighbour site, established hedge screening, spacious separation. Less bulk than existing pergolas being removed. No impact assessed. Cheltenham Beach Reserve (northern boundary): Coastal protection yard infringement limited to 0.375m depth over 0.784m length (roof overhang). No change to public access or coastal amenity. Spaciousness maintained. Other neighbours: No infringements affecting western/southern boundaries. Private site with established screening. Consultation: Pre-application meeting held 24 July 2024 with Auckland Council planner (Natasha Nades) and Built Heritage Specialist (Blair Hastings). Minutes attached (Attachment xx - note: minutes referenced in AEE para 1.4 but not visible in current document set; recommend planner verify attachment). Minutes record qualified support from heritage specialist for approach. Conclusion: No affected persons identified. No written approvals obtained. Recommends non-notification (s95E - no affected parties). Planner review required."], ["Risks from hazardous substances and installations (if any)", "N/A", "Residential use - no hazardous substances or installations proposed."], ["If monitoring required, how by whom", "N/A", ""], ["Customary rights if relevant", "N/A", "No customary rights groups identified. No customary marine title claims in this area per Marine and Coastal Area Act register."], ["Neighbourhood and wider community effects, including social economic and cultural", "Yes", "Neighbourhood effects (AEE para 6.5, pg 17): Proposal in keeping with planned suburban character, appropriate scale/design for Special Character Area. Argues it is a positive contribution to neighbourhood housing stock. No inter-site amenity impacts. Social effects: Provides improved family accommodation (additional bedrooms, better layout) supporting applicants' wellbeing. Positive. Economic effects: Construction phase employment. Property value maintained/enhanced by quality renovation. Cultural effects: Not explicitly assessed in AEE. Coastal location has M\u0101ori cultural associations (Waitemat\u0101 Harbour). Recommend planner consider whether cultural effects assessment required, though proposal maintains status quo (no new coastal effects).   Planner and heritage review required of all claims."]]}, {"type": "paragraph", "text": "Schedule 4 Clause 6 Requirements (continued):"}, {"type": "table", "data": [["Requirement", "Yes/No/N/A", "Comment"], ["Any physical effects on the locality, including landscape and visual effects", "Yes", "Physical effects (AEE para 6.1, pgs 13-15): Building form/scale: Complies with 8m zone height. HIRB standards met (no building dominance). Building coverage improves (34% to 32.8%). Footprint unchanged except minor roof overhang. Two-storey form appropriate for zone and SCAR context. Bulk/mass: Simplified roof design (removes faceted bays, reduces bulk). Less imposing than existing 1992 form. Materials/appearance: Weatherboard cladding (painted), corrugated iron roof, timber joinery, cedar shingle gable features. Traditional bungalow palette. Visual effects (beach-facing public realm) - AEE para 6.1(v) assesses as positive (improved bungalow design, traditional materials, appropriate colours). 3D renders provided (sheet 901) show beach-facing appearance - bungalow form, timber joinery, cedar shingle gables. Complements neighbouring character homes. Landscape effects: Landscaped area reduces (40% to 32.8%) due to driveway, but spacious setting maintained. Existing boundary vegetation retained. Volcanic viewshaft at -30.5m contour (not assessable). No landscape effects assessment provided - AEE para 1.2 correctly notes viewshaft assessment \"not viable\" given negative contour. Planner confirm this approach acceptable (appears reasonable as building cannot intrude into viewshaft plane below ground). Planner to review."], ["Any effect on ecosystems, including effects on plants or animals and any physical disturbance of habitats in the vicinity", "N/A", "Flat residential site, established for 100+ years. No significant vegetation, water bodies, or ecological habitats identified. Some trees/planting exist (photos) but not scheduled or significant. No indigenous biodiversity values identified. Coastal edge separated by beach reserve with established pohutukawa (on reserve land, not affected). No ecosystem effects anticipated."], ["Any effect on natural and physical resources having aesthetic, recreational, scientific, historical, spiritual, or cultural value", "Yes", "Aesthetic values: Special Character Area - AEE para 6.1 comprehensively assesses. Proposal enhances aesthetic values by restoring bungalow character. Recreational values: Argues no impact on Cheltenham Beach public access/use (reserve separate, site private). Historical values: House c.1923, significantly altered 1992. Pre-app minutes note \"loss of original building as result of significant changes\" and that \"special character qualities and original design features appear to have been highly compromised\" (AEE para 1.4). Built Heritage Specialist gave qualified support for approach. AEE para 6.1 explains proposal restores lost character values. Spiritual/cultural values: Not explicitly assessed. Given coastal location and M\u0101ori cultural associations, recommend planner consider whether spiritual/cultural values assessment needed, though proposal maintains status quo (no new coastal effects). Scientific values: None identified. Conclusion: planner review required including heritage review. Cultural requires planner consideration."], ["Any discharge of contaminants into the environment, including any unreasonable emission of noise", "Yes", "Construction phase only: Noise/dust: Temporary construction effects. Standard construction hours/practices apply (district plan controls). Stormwater discharge: Airey report (Oct 2024) confirms existing private stormwater system adequate. New roof area slightly less than existing (-8.7m\u00b2). Driveway runoff to existing cesspit. No change to discharge point. Water quality maintained. Wastewater: Connects to existing reticulated system. No change. Operational phase: Residential use - no industrial/commercial discharges. Standard domestic activities. Conclusion: No adverse contaminant discharge effects. Airey report (pg iii): \"can be serviced by stormwater infrastructure.\""], ["Any risk to the neighbourhood, the wider community, or the environment through natural hazards or hazardous installations", "Yes", "Natural hazards - CEHA comprehensively assessed: Airey Coastal and Stormwater Assessment (25 Oct 2024, Rev B) provides detailed assessment per E36.8.2(1) criteria: Coastal erosion risk (para 4.3, pg 7): Low. Sheltered location from SW winds, little fetch, no large-scale coastal processes. Protected by seawalls in reserve and site retaining wall on northern boundary. Established pohutukawa stabilize coastal edge. Coastal inundation risk (para 3.4, pg 5): Low. Substantial freeboard between ground floor level and 1% AEP storm surge level. Site not in floodplain. 100-year timeframe: Airey report assesses long-term risks. Notes \"relocation in event of severe coastal erosion is not possible and not likely to be necessary\" (AEE para 6.4, pg 16). Public land/access: No impact. Beach reserve separate. Landscape/environmental values: Maintained. AEE conclusion (para 6.4, pg 16): \"proposal readily meets criteria as site within CEHA\" and \"development as proposed can be accommodated without concern for coastal erosion effects.\" Hazardous installations: None - residential use. Recommendation: Airey report provides adequate CEHA assessment. Planner confirm conclusion that coastal hazard risks appropriately managed."]]}, {"type": "paragraph", "text": "PLANS AND DRAWINGS"}, {"type": "paragraph", "text": "Complete lan set by Geoff Richards Architects Ltd. All plans dated 10 March 2025, Revision R1 where applicable."}, {"type": "table", "data": [["Plan Type", "Yes/No/N/A", "Comment"], ["Scaled plans", "Yes", "All plans at 1:100 or 1:200 scale (metric). North points on all site plans. Dimensions provided. Professional presentation."], ["Existing site plan / topographical plan", "Yes", "Sheet 100 (Existing Site Plan): Shows existing house, garage, ROW/easements, boundaries, adjacent properties. Sheet 103 (Topographical Survey): Contours, spot levels, site at approx. 4.5m above datum. Flat topography. Northern boundary to beach reserve clearly shown."], ["Proposed site plan, floor plans, elevations, etc.", "Yes", "Sheet 102 (Proposed Site Plan R1): Shows proposed house footprint (unchanged from existing), new paved driveway, boundaries, ROW, dimensions. Clear annotation of yard infringements. Floor plans: Sheet 201 (existing basement), 202 (existing ground), 203 (existing roof), 204 (proposed basement), 205 (proposed ground), 206 (proposed first floor - NEW), 207 (proposed roof). Comprehensive internal layouts, room uses identified. Elevations: Sheets 401-404 (North, East, South, West). Show existing vs proposed, finished floor levels, ground levels, building heights, HIRB compliance planes, materials, joinery details. 3D Renders: Sheet 901 - multiple views including beach-facing (north) perspective showing bungalow character."], ["Earthworks plan", "Yes", "Sheet 104 (Town Planning - Site Cover & Yards R1) includes earthworks note: 30.0m\u00b3 volume, 100.0m\u00b2 area. AEE para 3.2 notes compliance with land disturbance standards (permitted activity). Location shown as cut for driveway formation and new footings. Adequate detail for effects assessment."], ["Drainage plan", "Yes", "Sheets 101 and 102 show stormwater system. Roof water to existing SW drain. Driveway to existing cesspit (installed for 1992 consent but driveway never paved). No change to discharge points. Cross-referenced to Airey report which confirms system adequacy. Adequate for RDA assessment."], ["Scheme plan (if subdivision)", "N/A", "Land use application only - no subdivision proposed."]]}, {"type": "paragraph", "text": "REPORTS"}, {"type": "table", "data": [["Report Type", "Yes/No/N/A", "Comment"], ["Relevant reports and specialist information based on site characteristics", "Yes", "Two specialist reports provided: 1. Coastal and Stormwater Assessment - Airey Consultants Ltd, Rev B, 25 October 2024. Assesses CEHA coastal erosion/inundation risks, stormwater management. Comprehensive assessment per E36.8.2(1). Concludes low risk, adequate infrastructure. Report adequate. 2. Architectural Statement - Geoff Richards, 30 October 2024 (referenced in AEE Attachment xx - recommend planner verify attachment present). Explains design rationale for restoring bungalow character. Other reports: Traffic: Not required - existing residential dwelling, no change to access arrangements except paving existing driveway. No traffic effects. Heritage: Architectural statement addresses character values. Pre-app heritage specialist input recorded. No separate heritage report required for this level of alteration in SCAR. Geotechnical: Not required - flat site, standard residential foundations, no instability identified. Arboricultural: Not required - no notable trees, no significant vegetation removal. Ecology: Not required - no ecological values identified. Conclusion: Appropriate specialist reports provided for site characteristics and consent requirements."], ["Infrastructure Report", "Yes", "Airey Consultants Ltd report (Oct 2024) addresses infrastructure: Stormwater: Existing private system adequate. Roof area slightly reduced. Driveway to existing cesspit. No public network upgrade required. Wastewater: Existing reticulated connection maintained. Water: Existing reticulated connection maintained. Earthworks: 30m\u00b3 cut - minor, managed via standard erosion control. Report concludes (pg iii): \"proposed development...can be serviced by stormwater infrastructure.\" Adequate infrastructure assessment for RDA."]]}, {"type": "paragraph", "text": "WRITTEN APPROVALS (IF ANY)"}, {"type": "table", "data": [["Address", "Name", "Owner/Occupier", "In Prescribed Form?"], ["None included", "-", "-", "AEE para 1.3 (pg 5) concludes no affected persons identified, therefore no written approvals obtained. Assessment appears reasonable given: (1) yard infringements limited to minor roof overhangs with established boundary screening; (2) landscaped/paved/impervious infringements internal to site; (3) no inter-site amenity impacts. Recommend planner verify no affected persons conclusion, particularly regarding 36C Cheltenham Road (eastern neighbour where minor roof overhang infringement occurs). If planner agrees no affected persons, written approvals not required. If planner considers 36C potentially affected, limited notification may be required under s95B.  Planner check needed."]]}, {"type": "paragraph", "text": "IWI ENGAGEMENT (if required)"}, {"type": "table", "data": [["Iwi Name", "Response", "Date of Referral", "Response Date"], ["None undertaken", "-", "-", "No iwi consultation documentation provided. AEE acknowledges coastal location (CEHA, beach interface) but does not include cultural impact assessment or iwi consultation record. Relevant iwi: Ng\u0101ti Wh\u0101tua \u014cr\u0101kei (Treaty settlement, statutory acknowledgement Waitemat\u0101 Harbour), Ng\u0101ti Paoa, Ng\u0101i Tai ki T\u0101maki, Te \u0100kitai Waiohua. Recommend planner assess whether mana whenua consultation required under s95E (potentially affected parties). Factors supporting consultation: coastal location, CEHA, cultural values of Waitemat\u0101. Factors against: private site, no change to coastal interface/access, minor alterations within existing footprint, no Sites of Significance to M\u0101ori identified, no ground disturbance in coastal margin. On balance, given minor scale and no change to coastal values, consultation may not be mandatory, but recommend planner exercise discretion - courtesy notification to Ng\u0101ti Wh\u0101tua \u014cr\u0101kei may be appropriate given kaitiaki role."]]}, {"type": "paragraph", "text": "OTHER CONSENTS"}, {"type": "table", "data": [["Address", "Proposal", "Consent Number", "Date Approved", "Comment"], ["52 Cheltenham Road (subject site)", "Alterations and additions to existing dwelling", "Consent dated 30/7/92 (referenced in AEE Attachment 5)", "30 July 1992", "Existing consent for major 1992 alterations which significantly changed house form (added four faceted bays, double garage/workshop, re-roofed). AEE para 2.1, pg 6 and para 3.1, pg 7 explain these alterations compromised bungalow character. Current proposal seeks to remedy this by simplifying design back to bungalow form. 1992 consent approved paved driveway (shown on plans) but never constructed - lawn remained. Existing use rights apply to building footprint and wall locations. Current proposal does not change walls, only extends roof overhang slightly. Approved cesspit from 1992 consent still exists - current proposal will utilize it for new driveway runoff. Relevant for establishing existing use rights - recommend planner review 1992 consent plans (referenced but not visible in current document set)."], ["36A Cheltenham Road", "Not identified", "-", "-", "Shares Easement 'A' (ROW) with subject site. No current consents identified affecting subject site."], ["36C Cheltenham Road", "Not identified", "-", "-", "Eastern neighbour (two-storey dwelling). No consents identified. Recommend planner check for any recent consents that might be relevant to yard infringement assessment."], ["Cheltenham Road area", "-", "-", "-", "No other directly relevant consents identified in application. Recommend planner run GIS search for recent consents in immediate vicinity (last 5 years) to check for any cumulative effects or precedents."]]}, {"type": "paragraph", "text": "END OF SECTION 88 CHECK"}]}]}, {"title": "GENERAL SCOPING REVIEW", "sections": [{"heading": "GENERAL SCOPING REVIEW", "content": [{"type": "paragraph", "text": "DISTRICT PLAN"}, {"type": "paragraph", "text": "SITE OVERLAYS"}, {"type": "paragraph", "text": "Special Character Areas Overlay - Residential (North Shore Devonport and Stanley Point) - D18"}, {"type": "table", "data": [["Policy or Rule", "Regulation Area", "District Plan Rule Reference", "Application Proposal", "AI Analysis", "Compliance Status"], ["D18.4.1(A4)", "External alterations or additions to building within SCAR", "D18.4.1 Activity Table", "Alterations including new roof form, first floor addition, minor joinery changes. Calculated percentage of demolition below trigger.", "RDA trigger. AEE paras 5.2, 6.1 provide comprehensive assessment against D18 objectives/policies and Schedule 15.1.7.6 character values. Proposal restores bungalow character compromised by 1992 alterations. Heritage specialist (pre-app) gave qualified support. Assessment against D18.8.2.1(2)(a) and (j) criteria thorough (AEE pgs 13-15). Traditional materials (weatherboard, corrugated iron, timber, cedar shingles), appropriate scale, enhanced character contribution. Effects: Potentially positive on special character values but needs planner review and heritage assessment. Citation: AEE paras 5.2 (pg 10), 6.1 (pgs 13-15), Schedule 15 analysis. Pre-app minutes (24 July 2024). Architectural statement by Geoff Richards.", "RDA - \u2718 Infringement\nConsent required under D18.4.1(A4). Planner review required."], ["D18.6.1.3", "Rear yard setback (3m minimum)", "Standard D18.6.1.3", "Eastern boundary: Two small infringements from roof overhang: 1. 0.219m depth x 6.955m length 2. 1.186m depth x 1.442m length. Northern boundary: 0.375m depth x 0.784m length. House walls unchanged (existing use rights). Infringements from new roof design extending beyond existing faceted bays, utilizing 750mm eave exemption.", "RDA trigger. AEE para 6.2 (pg 15) assesses effects as less than minor: indiscernible given small scale, spacious distance to boundary remains, established hedge screening to east, no impact on 36C Cheltenham Road. Northern infringement over deck area, replaces existing pergola structures (larger than new roof). Complies with H3.6.8 1m Single House zone rear yard. Purpose (H3.6.8): \"maintain reasonable standard of residential amenity for adjoining sites\" - achieved despite minor SCAR infringement. Assessment criteria D18.8.1.1(3): \"effects of infringements on streetscape and special character context\" - no streetscape visibility (rear site), spacious setting maintained. Citation: AEE paras 1.2 (reasons), 5.3.1 (pg 11), 6.2 (pg 15). Plans sheets 104, 401-404 show dimensions.", "RDA - \u2718 Infringement\nConsent required. Recommend detailed planner review with standard separation/screening maintained and checked."], ["D18.6.1.5", "Landscaped area (40% minimum)", "Standard D18.6.1.5", "32.8% provided (300m\u00b2) vs 40% required (365.6m\u00b2). Existing 36.5% (333.5m\u00b2) - already non-complying. Reduction due to paving existing lawn driveway (97.8m\u00b2 additional paving).", "RDA trigger. AEE para 6.3 (pg 15) explains: driveway formalisation necessary for functional garage access (currently lawn, forcing parking in ROW). Approved 1992 plans showed paved driveway but never constructed. Effects internal to site, argued to be indiscernible to neighbours. Private site with established boundaries. Landscaping retained (garden areas, lawn, established trees). No impact on special character values or streetscape argued (rear site, ROW access). Citation: AEE para 6.3 (pg 15). Plans sheet 102.", "RDA - \u2718 Infringement\nConsent required. Effects less than minor. Justified by functional needs but needs formal planner review. Heritage assessment cross-over."]]}, {"type": "paragraph", "text": "Regionally Significant Volcanic Viewshafts and Height Sensitive Areas - D14"}, {"type": "table", "data": [["Policy or Rule", "Regulation Area", "District Plan Rule Reference", "Application Proposal", "AI Analysis", "Compliance Status"], ["D14.4.1(A3)", "Buildings within viewshaft up to 9m height", "D14.4.1 Activity Table", "Proposal height 8m (complies with 8m zone standard). Site at -30.5m contour (below viewshaft plane).", "RDA trigger under D14.4.1(A3) for buildings up to 9m within T1 Rangitoto viewshaft. However, site at negative contour (-30.5m) means building is physically below viewshaft plane. AEE para 1.2 identifies this as consent reason but acknowledges actual viewshaft intrusion not viable to assess. Purpose D14.2 (protect significant views) achieved - no practical intrusion possible. Technical compliance with consent trigger but substantive compliance with policy intent. Citation: AEE para 1.2, 5.3. Plan sheet 104.", "RDA - \u2718 Infringement\nConsent required under D14.4.1(A3). No actual effects on viewshaft but detailed planner review to ensure this is correct."]]}, {"type": "paragraph", "text": "NATURAL ENVIRONMENT AREA-WIDE OVERLAYS"}, {"type": "paragraph", "text": "Coastal Erosion Hazard Area (CEHA) - E36"}, {"type": "table", "data": [["Policy or Rule", "Regulation Area", "District Plan Rule Reference", "Application Proposal", "AI Analysis", "Compliance Status"], ["E36.4.1(A2)", "External alterations increasing GFA", "E36.4.1 Activity Table", "New first floor addition increases GFA. Alterations within existing footprint plus minor roof overhangs.", "RDA trigger. E36.8.2(1) requires assessment by suitably qualified person. Airey Consultants Ltd Coastal and Stormwater Assessment (Rev B, 25 Oct 2024) provided. Assessment addresses: coastal erosion risk (very low - sheltered location, seawall protection, pohutukawa, retaining wall), coastal inundation (low risk - site elevation 4.5m, substantial freeboard above 1% AEP), wave overtopping (negligible), site stability (adequate). Report concludes risks appropriately managed, development will not exacerbate hazards, no additional mitigation required beyond standard construction. AEE para 6.4 addresses E36 policies - avoids/mitigates risks, does not increase exposure. Complies with E36.8.2 assessment criteria. Citation: Airey report (all sections). AEE para 6.4 (pg 16).", "RDA - \u2718 Infringement\nConsent required. Adequate specialist assessmen is provided but needs to be peer review by council experts. Low risk. Recommend  standard CEHA conditions and planner review."]]}, {"type": "paragraph", "text": "[Additional overlay sections continue: Built Environment and Transport, Natural Hazards/Environmental Risk/Flooding, Subdivision, Temporary Activities, Special Information/Report Requirements, Precinct/Local Rule Standards, Other Relevant District Plan Rules, National Policy Statements, National Environmental Standards, Non-Statutory Guidance]"}, {"type": "paragraph", "text": "ACTIVITY STATUS REVIEW"}, {"type": "table", "data": [["Land Use Status", "\u2610 Permitted  \u2610 Controlled  \u2611 Restricted discretionary  \u2610 Discretionary  \u2610 Non complying"], ["Subdivision Status", "\u2610 Permitted  \u2610 Controlled  \u2610 Restricted discretionary  \u2610 Discretionary  \u2610 Non complying   N/A"], ["Overall Status", "\u2610 Permitted  \u2610 Controlled  \u2611 Restricted discretionary  \u2610 Discretionary  \u2610 Non complying"]]}]}]}, {"title": "NOTIFICATION ASSESSMENT", "sections": [{"heading": "NOTIFICATION ASSESSMENT", "content": [{"type": "paragraph", "text": "Step 1: Mandatory Public Notification (s95A(2)-(4))"}, {"type": "table", "data": [["Test", "AI Assessment", "Chord Comments"], ["Request for public notification by applicant", "\u2611 No / \u2610 Yes", "No request made on application form. AEE para 1.3 recommends non-notification."], ["Proposal contravenes NES activity rules", "\u2611 No / \u2610 Yes / \u2610 Unclear", "No NES contraventions identified."], ["Further information (s92) was requested and refused", "\u2611 No / \u2610 Yes", "Application substantially complete under s88. No s92 RFI required or refused."]]}, {"type": "paragraph", "text": "Step 1 Conclusion: No mandatory public notification triggers under s95A(2)-(4)."}, {"type": "paragraph", "text": "Step 2: Public Notification Precluded (s95A(5))"}, {"type": "table", "data": [["Condition", "Applies?", "Chord Comments"], ["Application is a boundary activity (only breach is a yard/height rule on boundary)", "\u2610 No / \u2611 Yes", "Partially applicable but does not preclude all RDA triggers: Rear yard and coastal protection yard are boundary-related rules (D18.6.1.3, H3.6.8). However, proposal also infringes non-boundary rules: landscaped area (D18.6.1.5), paved area (D18.6.1.6), impervious area (H3.6.9), plus SCAR alterations (D18.4.1(A4)) and CEHA (E36.4.1(A2)). Multiple rule infringements beyond boundary activity definition. s95A(5)(a) boundary activity pathway not available."], ["Residential activity with controlled / restricted discretionary status and minor effects only", "\u2611 No / \u2610 Yes", "RDA status but multiple triggers beyond typical minor residential infringement: Not simple residential additions - includes SCAR and CEHA assessments. While effects assessed as less than minor, combination of RDA triggers takes proposal outside straightforward s95A(5)(b) preclusion. s95A(5)(b) preclusion not clearly applicable."]]}, {"type": "paragraph", "text": "Step 2 Conclusion: Public notification not clearly precluded under s95A(5) due to multiple RDA triggers beyond boundary activity."}, {"type": "paragraph", "text": "Step 3: Public Notification Required Due to Effects (s95A(8))"}, {"type": "table", "data": [["Trigger", "Assessment", "CHORD Comment"], ["Are adverse effects more than minor?", "\u2610 No / \u2611 Possibly / \u2610 Yes", "Comprehensive effects assessment indicates less than minor adverse effects: Special Character (D18): Positive effects - restores bungalow character lost in 1992 alterations. Heritage specialist (pre-app) gave qualified support. Traditional materials, appropriate scale, enhanced SCAR contribution. AEE pgs 13-15 provide detailed assessment against D18.8.2.1 criteria. Amenity (yards): Minor roof overhang infringements only (0.219m-1.186m depths). House walls unchanged (existing use rights). Established boundary screening (hedge). Spacious separation to 36C Cheltenham Road (eastern neighbour - two-storey house). Northern boundary to public beach reserve (no private amenity affected). New roof less bulk than existing pergolas being removed. No building dominance, HIRB complied. AEE pg 15 assesses effects less than minor. Landscaped/Paved/Impervious (areas): Driveway formalisation necessary for functional garage access. Effects internal to site, not visible from public realm (street or beach). Spacious setting maintained, boundary vegetation retained. Private site with established fencing/screening. Stormwater managed via existing system (Airey report confirms). AEE pg 15 assesses effects less than minor. Coastal Hazard (CEHA): Airey Coastal Assessment (Oct 2024) confirms low erosion/inundation risk. Sheltered location, protected by seawalls/pohutukawa/site retaining wall. Substantial freeboard, not in floodplain. No intensification (same footprint), appropriate setback maintained. No impact on public access or coastal values. AEE pgs 15-16 assesses effects appropriately managed. Visual/Landscape: Complies with height, but planner review required to ensure materials enhance.  . Rear site - not visible from Cheltenham Road. Volcanic viewshaft at -30.5m (no actual intrusion possible). Cumulative: Nil - positive precedent for sympathetic SCAR renovations. Building coverage improves (34% to 32.8%). Demonstrates compliance with principal standards. Conclusion: All adverse effects may be less than minor, but planner review required to confirm. Hertiage expert required to ensure positive special character effects."]]}, {"type": "paragraph", "text": "Step 3 Conclusion: Adverse effects possibly not more than minor. Public notification NOT required under s95A(8) subject to planner confirmation."}, {"type": "paragraph", "text": "Step 4: Is Limited Notification Required (s95B)"}, {"type": "table", "data": [["Question", "Response", "Chord Guidance"], ["Are there any identifiable affected persons (neighbours etc.)?", "\u2610 No / \u2611 Possibly / \u2610 Yes", "AEE para 1.3 (pgs 3-5) provides detailed affected persons assessment: 36C Cheltenham Road (eastern neighbour): Minor roof overhang infringement to shared boundary (max 1.186m depth x 1.442m length in one corner; 0.219m x 6.955m further south). Two-storey house on neighbour property. Established hedge screening on boundary. Spacious separation maintained. New roof overhang less bulky than existing pergolas being removed. No building dominance (HIRB complied). AEE assesses \"no impact\". Recommend planner verify: On balance, effects appear less than minor given: (1) infringement limited to small roof overhang (not building walls); (2) established screening; (3) reduction in bulk vs existing pergolas; (4) two-storey scale of neighbour house (not adversely dominated). Assess as not adversely affected more than minor but planner confirmation advised. Cheltenham Beach Reserve (northern boundary): Public land (beach reserve). Coastal protection yard infringement 0.375m depth x 0.784m length (roof overhang only). No change to public access or amenity. Spaciousness of coastal setting maintained. Not an \"affected person\" (public authority managing reserve land, no adverse effects on public use). Other neighbours: 36A Cheltenham Road (shares ROW): No infringements affecting this property. 38, 50 Cheltenham Road: No infringements to west/south boundaries. No effects beyond site boundaries (landscaped/paved/impervious internal). Public realm: Beach-facing design enhanced (positive SCAR effects). Not visible from Cheltenham Road street (rear site). No adverse effects on public views or amenity. Conclusion: No persons adversely affected more than minor identified but planner review required. AEE recommendation for non-notification appears sound. Planner verify 36C Cheltenham Road assessment - if agreement that effects less than minor (which appears reasonable), then no affected persons for s95E purposes."], ["Are there affected protected groups (iwi, customary title holders)?", "\u2610 No / \u2611 Possibly / \u2610 Yes", "Mana whenua consideration required: Ng\u0101ti Wh\u0101tua \u014cr\u0101kei: Treaty settlement includes statutory acknowledgement over Waitemat\u0101 Harbour (coastal waters). Site within coastal environment (CEHA), adjoins Cheltenham Beach Reserve. Cultural values: kaitiaki role, mahinga kai, navigational/historical associations with Waitemat\u0101. Assessment factors: Supporting consultation: (1) coastal/CEHA location; (2) cultural values of coastal environment; (3) appropriate to acknowledge kaitiaki role. Against mandatory consultation: (1) private site, no Sites of Significance to M\u0101ori; (2) no change to coastal interface/public access; (3) minor alterations within existing footprint; (4) no ground disturbance in coastal margin; (5) no effects on coastal values; (6) limited notification not otherwise required. Recommendation: Planner discretion. May not meet s95E affected party threshold (no more than minor effects on iwi values) but recommend courtesy notification to Ng\u0101ti Wh\u0101tua \u014cr\u0101kei given kaitiaki interest in Waitemat\u0101 coastal areas. If no response within reasonable timeframe, proceed. Other iwi: Ng\u0101ti Paoa, Ng\u0101i Tai ki T\u0101maki, Te \u0100kitai Waiohua also have interests but no specific statutory acknowledgements for this location. Consider whether courtesy notification appropriate (planner judgment)."], ["Are there special circumstances that warrant notification?", "\u2611 No / \u2610 Possibly / \u2610 Yes", "No special circumstances identified. Application well-prepared, effects comprehensively assessed, specialist reports provided, pre-app heritage input obtained. Proposal improves special character (positive outcome). No public interest factors requiring notification. Standard RDA processing appropriate."]]}, {"type": "paragraph", "text": "NOTIFICATION SUMMARY COMMENTS"}, {"type": "paragraph", "text": "Application substantially complete. All effects less than minor or positive but planner review needed. No affected persons identified. Recommend non-notification but planner verify 36C Cheltenham Road assessment and consider courtesy notification to mana whenua."}, {"type": "paragraph", "text": "CHORD NOTIFICATION RECOMMENDATION"}, {"type": "table", "data": [["More information required?", "\u2611 No / \u2610 Possibly / \u2610 Yes"], ["Notification assessment based on information provided:", "Public notification: NOT REQUIRED SUBJECT TO PLANNER CHECK\nLimited notification: NOT REQUIRED (subject to planner verification of 36C Cheltenham Road effects and mana whenua consideration)"]]}, {"type": "paragraph", "text": "END OF NOTIFICATION ASSESSMENT"}, {"type": "paragraph", "text": "Disclaimer: This CHORD assessment is a decision aid only and does not replace planner professional judgment. All recommendations subject to planner verification and council statutory decision-making processes."}]}]}, {"title": "AI RECOMMENDATIONS", "sections": [{"heading": "AI SUMMARY / NOTES", "content": [{"type": "table", "data": [["Overall Assessment", "VERDICT"], ["This application proposes alterations and additions to an existing dwelling within the Special Character Areas Overlay - Residential (North Shore Devonport and Stanley Point). The proposal triggers consent as a Restricted Discretionary Activity under multiple district plan provisions. Key environmental effects are summarized below with references to supporting documentation for planner verification.", "Complete application"], ["Environmental Effects Summary", ""], ["Special Character Effects (AEE pgs 13-15):", ""], ["AEE assesses effects as POSITIVE. Proposal seeks to restore bungalow character compromised by 1992 alterations. Traditional materials proposed (weatherboard, corrugated iron, timber, cedar shingles). Architectural statement by Geoff Richards provided. Pre-application meeting (24 July 2024) with Built Heritage Specialist Blair Hastings recorded qualified support for approach. Assessment addresses Schedule 15.1.7.6 character statement values and D18.8.2.1 criteria. Planner to verify: (1) Design quality adequate for SCAR; (2) Restoration approach appropriate; (3) Built Heritage peer review of final design recommended.", "Planner and Heritage Design review required."], ["Amenity Effects - Yard Infringements (AEE pg 15):", ""], ["AEE assesses effects as LESS THAN MINOR. Yard infringements limited to minor roof overhang extensions (0.219m-1.186m depths) - no change to building walls or footprint. Eastern boundary: Established hedge screening to 36C Cheltenham Road, spacious separation maintained, two-storey neighbour house. Northern boundary: Infringement to beach reserve (public land), replaces existing pergolas of greater bulk. Planner to verify: (1) 36C Cheltenham Road not adversely affected more than minor; (2) Established screening remains; (3) Consider if affected party assessment for limited notification.", "Planner review and confirmation required."], ["Landscaped/Paved/Impervious Effects (AEE pg 15):", ""], ["AEE assesses effects as LESS THAN MINOR, internal to site. Driveway formalisation necessary for functional garage access (currently lawn). 1992 consent approved paved driveway but never constructed. Effects absorbed within site amenity, no inter-site impacts, private site with established boundaries. Planner to verify: (1) Functional justification accepted; (2) Stormwater capacity adequate (refer to Development Engineering).", "Planner assessment required."], ["Coastal Hazard Effects (Airey report, AEE pgs 15-16):", ""], ["Airey Consultants Ltd Coastal and Stormwater Assessment (Rev B, 25 Oct 2024) assesses coastal erosion and inundation risks as LOW. Site at 4.5m elevation, sheltered location, protection by seawalls/pohutukawa/retaining wall, substantial freeboard above 1% AEP. Proposal maintains appropriate setback, does not increase hazard exposure. AEE addresses E36 policies. Planner to verify: (1) Refer report to Coastal Engineering for peer review; (2) Confirm CEHA effects conclusions appropriate; (3) Standard CEHA consent notice condition to apply if consent granted.", "Planner assessment required."], ["Stormwater Effects (Airey report pg iii):", ""], ["Airey report concludes stormwater adequately managed via existing private system. Roof area slightly reduced. Additional driveway runoff to existing cesspit (installed for 1992 consent). No public network upgrade required. Planner to verify: (1) Refer to Development Engineering to confirm cesspit capacity adequate for additional impervious area; (2) Confirm earthworks methodology (30m\u00b3 cut) acceptable.", "Engineer and planner review required."], ["Visual/Landscape Effects:", ""], ["AEE assesses effects as LESS THAN MINOR to POSITIVE. Complies with 8m zone height, HIRB standards met, building coverage improves from 34% to 32.8%. Beach-facing appearance enhanced through bungalow design restoration (3D renders sheet 901). Rear site - limited visibility from Cheltenham Road street. Volcanic viewshaft (D14) technically triggered but site at -30.5m contour (below viewshaft plane) - no actual intrusion possible. Planner to verify: (1) D14 approach acceptable (technical trigger but substantive compliance); (2) Design quality from public realm perspectives.", "Design, heritage and planner review required."], ["Cumulative/Precedent Effects:", ""], ["AEE assesses cumulative effects as NIL. Proposal demonstrates best practice for sympathetic SCAR renovations - positive precedent. Building coverage improves. Complies with principal development standards (height, HIRB). Minor infringements justified by design quality and functional needs.", "Planner review required."]]}, {"type": "paragraph", "text": "Effects Conclusion"}, {"type": "paragraph", "text": "Based on information provided in AEE and specialist reports, environmental effects appear to be less than minor or positive overall. However, planner verification and specialist peer reviews required as outlined in recommendations below before final effects conclusion can be reached."}]}, {"heading": "AI RECOMMENDATIONS AND PLANNER FOCUS AREAS", "content": [{"type": "paragraph", "text": "State whether the application meets Section 88 of the RMA and can be accepted. Identify which internal specialists should be consulted and whether notification should be considered. Advise relevant page references where possible to enhance planner checks."}, {"type": "paragraph", "text": "Section 88 Acceptance: ACCEPT"}, {"type": "paragraph", "text": "Application is substantially complete and provides adequate information for processing under s88 RMA. All Schedule 4 requirements addressed. Comprehensive AEE, detailed plans, and specialist coastal/stormwater report provided. Application can be accepted for processing."}, {"type": "paragraph", "text": "Items to Verify Before Processing:"}, {"type": "paragraph", "text": "Certificate of title - verify searched within 3 months of lodgement"}, {"type": "paragraph", "text": "Easement documentation - verify Easement 'A' and pedestrian access easement documents attached"}, {"type": "paragraph", "text": "1992 consent plans (Attachment 5) - verify attached for existing use rights verification"}, {"type": "paragraph", "text": "Architectural statement (Attachment xx, dated 30 Oct 2024) - verify attached"}, {"type": "paragraph", "text": "Pre-application meeting minutes (Attachment xx, dated 24 July 2024, PRR00041814) - verify attached"}, {"type": "paragraph", "text": "Processing Pathway: Medium Complexity"}, {"type": "paragraph", "text": "Recommended pathway: Standard RDA processing with internal specialist peer reviews"}, {"type": "paragraph", "text": "Reasons:"}, {"type": "paragraph", "text": "Well-prepared application with comprehensive AEE and specialist reports"}, {"type": "paragraph", "text": "Multiple RDA triggers requiring assessment across different planning disciplines"}, {"type": "paragraph", "text": "Special Character Area overlay requires Built Heritage specialist input"}, {"type": "paragraph", "text": "Coastal Erosion Hazard Area requires Coastal Engineering peer review"}, {"type": "paragraph", "text": "Stormwater and infrastructure aspects require Development Engineering review"}, {"type": "paragraph", "text": "Notification assessment required (though preliminary assessment indicates non-notification \nlikely)"}, {"type": "paragraph", "text": "Required Internal Specialist Referrals:"}, {"type": "table", "data": [["Specialist Area", "Action Required", "Priority", "Documents to Review"], ["Built Heritage", "REQUIRED: Peer review of proposal against D18 Special Character criteria. Pre-app heritage support provided (24 July 2024, Blair Hastings) but final design review required. Planner to check: (1) Is restoration of bungalow character appropriate for this dwelling? (2) Are materials and design quality adequate for SCAR? (3) Does proposal maintain/enhance character values per Schedule 15.1.7.6? (4) Confirm D18.8.2.1 assessment criteria satisfied.", "HIGH", "AEE pgs 10-11, 13-15; Architectural statement (Attachment xx); Plans sheets 401-404 (elevations), 901 (renders); Pre-app meeting minutes; Schedule 15 analysis in AEE"], ["Coastal Engineering", "REQUIRED: Peer review of Airey Coastal and Stormwater Assessment. Planner to check: (1) Is coastal erosion risk assessment methodology sound? (2) Are conclusions regarding low risk appropriate for this site? (3) Is site elevation and freeboard adequate? (4) Are recommendations (if any) appropriate for consent conditions? (5) Confirm E36 CEHA assessment criteria satisfied.", "MEDIUM", "Airey Consultants Ltd report (full document, Rev B, 25 Oct 2024); AEE pgs 12-13, 15-16; Plans sheet 103 (topographical survey showing site levels)"], ["Development Engineering", "REQUIRED: Review stormwater and earthworks aspects. Planner to check: (1) Is existing cesspit adequate for additional driveway runoff (97.8m\u00b2 additional impervious area)? (2) Is stormwater system capacity confirmed? (3) Are earthworks methodology and erosion control adequate (30m\u00b3 cut, 100m\u00b2 area)? (4) Are any engineering conditions required? (5) Review drainage plan (sheets 101-102).", "MEDIUM", "Airey report (stormwater sections); Plans sheets 101-102 (drainage), 104 (earthworks notation); AEE pgs 12, 15"]]}, {"type": "paragraph", "text": "Notification Preliminary Assessment"}, {"type": "paragraph", "text": "Note: This is a preliminary notification assessment only. Final notification decision is for the planner to determine after full assessment."}, {"type": "paragraph", "text": "Preliminary indication: Non-notification likely"}, {"type": "paragraph", "text": "Public Notification (s95A):"}, {"type": "paragraph", "text": "No mandatory triggers identified (s95A(2)-(4))"}, {"type": "paragraph", "text": "Not precluded by s95A(5) (multiple RDA triggers beyond boundary activity)"}, {"type": "paragraph", "text": "Preliminary effects assessment indicates less than minor adverse effects"}, {"type": "paragraph", "text": "PLANNER TO VERIFY: Final effects conclusion after specialist peer reviews completed"}, {"type": "paragraph", "text": "Limited Notification (s95B):"}, {"type": "paragraph", "text": "PLANNER TO VERIFY: 36C Cheltenham Road (eastern neighbour) - minor roof overhang infringement. Check if adversely affected more than minor. AEE assessment indicates no impact due to established screening and spacious separation, but planner confirmation required."}, {"type": "paragraph", "text": "Cheltenham Beach Reserve (northern boundary) - public land, roof overhang only, assessed as not an affected party"}, {"type": "paragraph", "text": "No other neighbouring properties appear adversely affected"}, {"type": "paragraph", "text": "PLANNER TO CONSIDER: Mana whenua consultation under s95E - coastal location (CEHA, Waitemat\u0101 Harbour). Relevant iwi: Ng\u0101ti Wh\u0101tua \u014cr\u0101kei (statutory acknowledgement), Ng\u0101ti Paoa, Ng\u0101i Tai ki T\u0101maki, Te \u0100kitai Waiohua. Given private site, no coastal works, minor alterations - mandatory consultation may not apply, but courtesy notification to Ng\u0101ti Wh\u0101tua \u014cr\u0101kei recommended for planner consideration."}, {"type": "paragraph", "text": "Key Items for Planner Assessment"}, {"type": "paragraph", "text": "The following items require planner professional judgment:"}, {"type": "paragraph", "text": "1. Special Character Assessment"}, {"type": "paragraph", "text": "After Built Heritage peer review received, planner to assess whether proposal appropriately responds to D18 objectives, policies, and Schedule 15.1.7.6 character values. Consider: (a) Is restoration approach appropriate? (b) Are materials and design quality adequate? (c) Does proposal maintain/enhance SCAR? (d) What matters of discretion require focus in decision?"}, {"type": "paragraph", "text": "2. Coastal Hazard Risk Management"}, {"type": "paragraph", "text": "After Coastal Engineering peer review received, planner to assess whether E36 CEHA provisions satisfied. Consider: (a) Are risks appropriately managed? (b) Is assessment methodology sound? (c) Are any specific conditions required? (d) Standard CEHA consent notice condition to apply."}, {"type": "paragraph", "text": "3. Stormwater and Infrastructure"}, {"type": "paragraph", "text": "After Development Engineering review received, planner to assess whether infrastructure adequate. Consider: (a) Is cesspit capacity confirmed for additional runoff? (b) Are engineering conditions required? (c) Earthworks management adequate?"}, {"type": "paragraph", "text": "4. Affected Persons Assessment"}, {"type": "paragraph", "text": "Planner to verify AEE affected persons assessment (para 1.3). Particular focus: 36C Cheltenham Road - are effects from minor roof overhang less than minor? Consider: established screening, spacious separation, reduced bulk vs existing pergolas. If adversely affected more than minor, limited notification may be required."}, {"type": "paragraph", "text": "5. Mana Whenua Engagement"}, {"type": "paragraph", "text": "Planner to assess whether s95E consultation required or whether courtesy notification to Ng\u0101ti Wh\u0101tua \u014cr\u0101kei appropriate. Consider: coastal location, CEHA, kaitiaki role over Waitemat\u0101 Harbour, but also: private site, no coastal works, no change to coastal values, minor alterations within existing footprint. Planner discretion required."}, {"type": "paragraph", "text": "6. Volcanic Viewshaft Technical Trigger"}, {"type": "paragraph", "text": "Planner to confirm AEE approach acceptable - D14.4.1(A3) technically triggered but site at -30.5m contour (below viewshaft plane) means no actual intrusion possible. Substantive policy compliance achieved despite technical consent requirement."}, {"type": "paragraph", "text": "END OF AI RECOMMENDATIONS"}, {"type": "paragraph", "text": "This AI assessment provides initial completeness check and routing recommendations only. All assessments, notification decisions, and consent outcomes remain the professional judgment of qualified planning staff."}]}]}];

// Render static section content
const renderStaticSection = (sectionData) => {
  if (!sectionData || !sectionData.sections) return null;
  
  const renderTable = (tableData, keyPrefix) => {
    if (!tableData || tableData.length === 0) return null;
    const [headers, ...rows] = tableData;
    
    return (
      <div key={keyPrefix} style={{ background: '#f8fafc', borderRadius: '8px', overflow: 'hidden', border: '1px solid #e2e8f0', marginBottom: '16px' }}>
        <table style={{ width: '100%', fontSize: '13px', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #cbd5e1', background: '#f1f5f9' }}>
              {headers.map((header, i) => (
                <th key={i} style={{ padding: '14px', textAlign: 'left', fontWeight: '600', color: '#475569' }}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} style={{ borderBottom: rowIndex < rows.length - 1 ? '1px solid #e2e8f0' : 'none' }}>
                {row.map((cell, cellIndex) => {
                  let cellColor = '#64748b';
                  let cellBg = 'transparent';
                  let fontWeight = '400';
                  
                  if (cell.includes('☑ Yes') || cell === 'Yes') {
                    cellColor = '#16a34a';
                    fontWeight = '600';
                  } else if (cell.includes('☐ No') || cell === 'No') {
                    cellColor = '#dc2626';
                  } else if (cell.includes('⚠') || cell.includes('Flag') || cell.includes('To be confirmed')) {
                    cellColor = '#92400e';
                    cellBg = '#fef3c7';
                  }
                  
                  if (cellIndex === 0) {
                    fontWeight = '600';
                    cellColor = '#475569';
                    cellBg = '#f1f5f9';
                  }

                  return (
                    <td 
                      key={cellIndex} 
                      style={{ 
                        padding: '14px', 
                        color: cellColor,
                        background: cellBg,
                        fontWeight: fontWeight,
                        verticalAlign: 'top',
                        lineHeight: '1.6'
                      }}
                    >
                      {cell.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          {i < cell.split('\n').length - 1 && <br />}
                        </React.Fragment>
                      ))}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div>
      {sectionData.sections.map((section, sectionIndex) => (
        <div key={sectionIndex} style={{ marginBottom: '32px' }}>
          {section.heading && section.heading !== sectionData.title && (
            <h4 style={{ 
              fontSize: '18px', 
              fontWeight: '600', 
              marginBottom: '16px', 
              color: '#1e293b', 
              paddingBottom: '8px', 
              borderBottom: '2px solid #e2e8f0' 
            }}>
              {section.heading}
            </h4>
          )}
          {section.content.map((item, itemIndex) => {
            if (item.type === 'table') {
              return renderTable(item.data, `sec${sectionIndex}-item${itemIndex}`);
            } else if (item.type === 'paragraph') {
              const isHeading = item.text === item.text.toUpperCase() && item.text.length < 100;
              return (
                <div 
                  key={`sec${sectionIndex}-para${itemIndex}`}
                  style={{ 
                    fontSize: isHeading ? '14px' : '13px',
                    fontWeight: isHeading ? '600' : '400',
                    marginBottom: isHeading ? '12px' : '8px',
                    color: isHeading ? '#1e293b' : '#64748b',
                    textTransform: isHeading ? 'uppercase' : 'none',
                    letterSpacing: isHeading ? '0.5px' : 'normal'
                  }}
                >
                  {item.text}
                </div>
              );
            }
            return null;
          })}
        </div>
      ))}
    </div>
  );
};

const comprehensiveConfig = {
  "metadata": {
    "districtName": "Auckland District",
    "planVersion": "Operative 15/11/2016",
    "totalRules": 230,
    "objectiveRules": 130,
    "subjectiveRules": 100,
    "zones": 6
  },
  
  "zones": [
    {
      "zoneId": "GRZ",
      "zoneName": "General Residential Zone",
      "description": "Low to medium-density residential activities",
      "chapter": 8,
      
      "objectiveRules": {
        "standards": [
          {
            "ruleCode": "GRZ-STD-1",
            "name": "Building Height",
            "type": "height",
            "value": 7,
            "unit": "m",
            "operator": "<=",
            "details": "Maximum height 7m OR 2 storeys, whichever is less",
            "measurement": "Measured from ground level to highest point of roof"
          },
          {
            "ruleCode": "GRZ-STD-2",
            "name": "Front Setback",
            "type": "frontSetback",
            "value": 4,
            "unit": "m",
            "operator": ">=",
            "details": "Minimum 4m from front boundary",
            "exceptions": "Garages may be 3m if door faces street"
          },
          {
            "ruleCode": "GRZ-STD-3",
            "name": "Side Setback",
            "type": "sideSetback",
            "value": 1.5,
            "unit": "m",
            "operator": ">=",
            "details": "Minimum 1.5m from side boundaries",
            "exceptions": "Ground floor walls without windows may be 1m"
          },
          {
            "ruleCode": "GRZ-STD-4",
            "name": "Rear Setback",
            "type": "rearSetback",
            "value": 2,
            "unit": "m",
            "operator": ">=",
            "details": "Minimum 2m from rear boundary"
          },
          {
            "ruleCode": "GRZ-STD-5",
            "name": "Site Coverage",
            "type": "siteCoverage",
            "value": 40,
            "unit": "%",
            "operator": "<=",
            "details": "Maximum 40% of site area covered by buildings"
          },
          {
            "ruleCode": "GRZ-STD-6",
            "name": "Outdoor Living Space",
            "type": "outdoorLiving",
            "value": 30,
            "unit": "m",
            "operator": ">=",
            "details": "Minimum 30m per dwelling unit, must be contiguous and accessible from living area"
          },
          {
            "ruleCode": "GRZ-STD-7",
            "name": "Landscaping",
            "type": "landscaping",
            "value": 20,
            "unit": "%",
            "operator": ">=",
            "details": "Minimum 20% of site as landscaped area with trees/shrubs"
          },
          {
            "ruleCode": "GRZ-STD-8",
            "name": "Parking Spaces",
            "type": "parking",
            "value": 2,
            "unit": "spaces",
            "operator": ">=",
            "details": "2 spaces per dwelling, 1 space per visitor unit"
          }
        ],
        
        "activities": [
          {
            "ruleCode": "GRZ-R1",
            "activity": "Residential unit (single dwelling)",
            "activityStatus": "Permitted",
            "conditions": "Must comply with all standards GRZ-STD-1 to GRZ-STD-8"
          },
          {
            "ruleCode": "GRZ-R2",
            "activity": "Residential unit (multi-unit development up to 3 units)",
            "activityStatus": "Permitted",
            "conditions": "Must comply with all standards plus additional outdoor living per unit"
          },
          {
            "ruleCode": "GRZ-R3",
            "activity": "Minor residential unit (granny flat)",
            "activityStatus": "Permitted",
            "conditions": "Maximum 60m GFA, one per site"
          },
          {
            "ruleCode": "GRZ-R4",
            "activity": "Home business",
            "activityStatus": "Permitted",
            "conditions": "Maximum 2 non-resident employees, no retail sales"
          },
          {
            "ruleCode": "GRZ-R5",
            "activity": "Home craft",
            "activityStatus": "Permitted",
            "conditions": "Maximum 40m of site used, retail sales permitted"
          },
          {
            "ruleCode": "GRZ-R6",
            "activity": "Farming - arable and animal keeping",
            "activityStatus": "Permitted",
            "conditions": "Maximum 2 household units kept per 1000m"
          },
          {
            "ruleCode": "GRZ-R7",
            "activity": "Community facility (place of assembly)",
            "activityStatus": "Controlled",
            "mattersOfControl": ["Hours of operation", "Noise", "Parking", "Traffic"]
          },
          {
            "ruleCode": "GRZ-R8",
            "activity": "Visitor accommodation (B&B, homestay)",
            "activityStatus": "Controlled",
            "mattersOfControl": ["Number of guests", "Parking provision", "Character and amenity"]
          },
          {
            "ruleCode": "GRZ-R9",
            "activity": "Childcare facility (in-home)",
            "activityStatus": "Controlled",
            "conditions": "Maximum 5 children",
            "mattersOfControl": ["Safety", "Outdoor space", "Drop-off arrangements"]
          },
          {
            "ruleCode": "GRZ-R10",
            "activity": "Educational facility (small scale)",
            "activityStatus": "Restricted Discretionary",
            "mattersOfDiscretion": ["Traffic effects", "Noise", "Scale and character", "Parking demand"]
          },
          {
            "ruleCode": "GRZ-R11",
            "activity": "Healthcare facility (medical centre)",
            "activityStatus": "Restricted Discretionary",
            "mattersOfDiscretion": ["Hours of operation", "Patient numbers", "Parking", "Amenity effects"]
          },
          {
            "ruleCode": "GRZ-R12",
            "activity": "Retirement village",
            "activityStatus": "Restricted Discretionary",
            "mattersOfDiscretion": ["Design and layout", "Communal facilities", "Accessibility", "Integration with surroundings"]
          },
          {
            "ruleCode": "GRZ-R13",
            "activity": "Multi-unit residential (4+ units)",
            "activityStatus": "Restricted Discretionary",
            "mattersOfDiscretion": ["Design quality", "Onsite amenity", "Effects on neighbors", "Urban form"]
          },
          {
            "ruleCode": "GRZ-R14",
            "activity": "Commercial activity (small scale)",
            "activityStatus": "Discretionary",
            "note": "Must demonstrate compatibility with residential character"
          },
          {
            "ruleCode": "GRZ-R15",
            "activity": "Retail activity",
            "activityStatus": "Non-Complying",
            "note": "Not anticipated in residential zone - high threshold for approval"
          },
          {
            "ruleCode": "GRZ-R16",
            "activity": "Industrial activity",
            "activityStatus": "Non-Complying",
            "note": "Incompatible with residential amenity"
          },
          {
            "ruleCode": "GRZ-R17",
            "activity": "Service station",
            "activityStatus": "Prohibited",
            "note": "Cannot be granted under any circumstances"
          }
        ]
      },
      "subjectiveRules": {
        "mattersOfControl": {
          "forControlledActivities": [
            {
              "code": "GRZ-MC-1",
              "matter": "Effects on residential character and amenity",
              "considerations": [
                "Visual compatibility with surrounding development",
                "Maintenance of privacy for neighboring properties",
                "Screening and landscaping effectiveness",
                "Building bulk and scale in streetscape"
              ]
            },
            {
              "code": "GRZ-MC-2",
              "matter": "Design and appearance",
              "considerations": [
                "Architectural style and materials",
                "Roof form and articulation",
                "Window and door proportions",
                "Facade treatment and modulation"
              ]
            }
          ]
        },
        "mattersOfDiscretion": {
          "forRestrictedDiscretionaryActivities": [
            {
              "code": "GRZ-MD-1",
              "matter": "Urban form and residential coherence",
              "assessmentCriteria": [
                "Does the development respect existing settlement patterns?",
                "Is the building scale appropriate to the street?",
                "Are public/private interfaces well defined?",
                "Does landscaping enhance street character?"
              ]
            },
            {
              "code": "GRZ-MD-2",
              "matter": "Effects on neighbors",
              "assessmentCriteria": [
                "Degree of shading on adjacent properties",
                "Visual dominance and outlook effects",
                "Privacy impacts from windows/balconies",
                "Noise from activities or equipment"
              ]
            }
          ]
        },
        "assessmentCriteria": {
          "forDiscretionaryActivities": [
            {
              "code": "GRZ-AC-1",
              "criterion": "Consistency with zone objectives and policies",
              "guidance": "Must demonstrate activity is consistent with residential zone purpose"
            },
            {
              "code": "GRZ-AC-2",
              "criterion": "Effects on residential amenity",
              "guidance": "Assess noise, traffic, parking, visual effects, hours of operation"
            }
          ]
        }
      }
    },
    {
      "zoneId": "LCZ",
      "zoneName": "Local Centre Zone",
      "description": "Small-scale commercial and community activities",
      "chapter": 7,
      "objectiveRules": {
        "standards": [
          {
            "ruleCode": "LCZ-STD-1",
            "name": "Building Height",
            "type": "height",
            "value": 12,
            "unit": "m",
            "operator": "<=",
            "details": "Maximum 12m height"
          },
          {
            "ruleCode": "LCZ-STD-2",
            "name": "Floor Area - Retail",
            "type": "floorArea",
            "value": 500,
            "unit": "m",
            "operator": "<=",
            "details": "Maximum 500m GFA per retail tenancy"
          }
        ],
        "activities": [
          {
            "ruleCode": "LCZ-R1",
            "activity": "Retail (convenience goods)",
            "activityStatus": "Permitted"
          },
          {
            "ruleCode": "LCZ-R2",
            "activity": "Food and beverage (caf, restaurant)",
            "activityStatus": "Permitted"
          }
        ]
      }
    },
    {
      "zoneId": "MCZ",
      "zoneName": "Metropolitan Centre Zone",
      "description": "Primary commercial centre - Paraparaumu town centre",
      "chapter": 7,
      "objectiveRules": {
        "standards": [
          {
            "ruleCode": "MCZ-STD-1",
            "name": "Building Height",
            "type": "height",
            "value": 20,
            "unit": "m",
            "operator": "<=",
            "details": "Maximum 20m (approximately 6 storeys)"
          }
        ],
        "activities": [
          {
            "ruleCode": "MCZ-R1",
            "activity": "Retail (all scales)",
            "activityStatus": "Permitted"
          },
          {
            "ruleCode": "MCZ-R2",
            "activity": "Office",
            "activityStatus": "Permitted"
          }
        ]
      }
    },
    {
      "zoneId": "HRZ",
      "zoneName": "High Density Residential Zone",
      "description": "Medium to high-density residential - apartments and townhouses",
      "chapter": 8,
      "objectiveRules": {
        "standards": [
          {
            "ruleCode": "HRZ-STD-1",
            "name": "Building Height",
            "type": "height",
            "value": 15,
            "unit": "m",
            "operator": "<=",
            "details": "Maximum 15m (approximately 4 storeys)"
          }
        ],
        "activities": [
          {
            "ruleCode": "HRZ-R1",
            "activity": "Apartment building",
            "activityStatus": "Permitted"
          }
        ]
      }
    },
    {
      "zoneId": "GIZ",
      "zoneName": "General Industrial Zone",
      "description": "Manufacturing, warehousing, and industrial services",
      "chapter": 6,
      "objectiveRules": {
        "standards": [
          {
            "ruleCode": "GIZ-STD-1",
            "name": "Building Height",
            "type": "height",
            "value": 15,
            "unit": "m",
            "operator": "<=",
            "details": "Maximum 15m height"
          }
        ],
        "activities": [
          {
            "ruleCode": "GIZ-R1",
            "activity": "Manufacturing (light industrial)",
            "activityStatus": "Permitted"
          }
        ]
      }
    },
    {
      "zoneId": "GRUZ",
      "zoneName": "General Rural Zone",
      "description": "Pastoral farming and rural living",
      "chapter": 10,
      "objectiveRules": {
        "standards": [
          {
            "ruleCode": "GRUZ-STD-1",
            "name": "Building Height",
            "type": "height",
            "value": 9,
            "unit": "m",
            "operator": "<=",
            "details": "Maximum 9m for dwellings and accessory buildings"
          }
        ],
        "activities": [
          {
            "ruleCode": "GRUZ-R1",
            "activity": "Farming - pastoral",
            "activityStatus": "Permitted"
          }
        ]
      }
    }
  ]
};

function App() {
  const [activeTab, setActiveTab] = useState('upload');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    zone: '',
    activity: '',
    height: '',
    frontSetback: ''
  });
  const [assessmentResults, setAssessmentResults] = useState(null);
  const [isAssessing, setIsAssessing] = useState(false);
  const [expandedRules, setExpandedRules] = useState({});
  const [expandedZones, setExpandedZones] = useState({});
  const [expandedSections, setExpandedSections] = useState({
    reviewSummary: false,
    preApplication: false,
    section88: false,
    scopingReview: false,
    notification: false,
    aiRecommendations: false
  });
  
  // NEW WORKFLOW STATE
  const [workflowStage, setWorkflowStage] = useState(null);
  const [workflowData, setWorkflowData] = useState({
    s88_result: null,
    activity_status: null,
    compliance_matrix: null,
    notification_decision: null
  });
  const [showWorkflowMenu, setShowWorkflowMenu] = useState(false);


  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleRule = (ruleCode) => {
    setExpandedRules(prev => ({ ...prev, [ruleCode]: !prev[ruleCode] }));
  };

  const toggleZone = (zoneId) => {
    setExpandedZones(prev => ({ ...prev, [zoneId]: !prev[zoneId] }));
  };

  // INITIAL ASSESSMENT - Sets up for workflow

  // Handle file upload with visual feedback
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    setIsProcessing(true);
    setUploadProgress(0);
    
    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          setUploadedFile({
            name: file.name,
            size: file.size,
            type: file.type,
            uploadedAt: new Date().toISOString()
          });
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  const runAssessment = () => {
    setIsAssessing(true);
    
    setTimeout(() => {
      const zone = comprehensiveConfig.zones[0];
      // Create mock issues for demonstration
      const issues = [
        {
          severity: 'critical',
          title: 'Building Height Exceeded',
          description: 'Proposed height 8.5m exceeds maximum 7m',
          ruleReference: 'GRZ-STD-1'
        },
        {
          severity: 'major',
          title: 'Front Setback Non-Compliance',
          description: 'Proposed setback 3m is less than required 4m',
          ruleReference: 'GRZ-STD-2'
        }
      ];
      
      setAssessmentResults({
        zone: zone.zoneName,
        issues: issues
      });
      
      setIsAssessing(false);
      setShowWorkflowMenu(true); // Show workflow selection
      setActiveTab('workflow');
    }, 2000);
  };

  // WORKFLOW EXECUTION FUNCTIONS
  const runS88Completeness = () => {
    setWorkflowStage('s88_processing');
    
    setTimeout(() => {
      // Simulate s88 completeness check
      const s88Result = {
        status: uploadedFile ? 'complete' : 'incomplete',
        missingItems: uploadedFile ? [] : [
          'Site plans showing building footprint',
          'Floor plans and elevations',
          'Assessment of Environmental Effects (AEE)'
        ],
        next_steps: uploadedFile ? ['activity_status'] : null,
        flags_for_downstream: {
          notification: uploadedFile ? null : 'No written approvals provided'
        },
        timestamp: new Date().toISOString(),
        duration: '1.5s'
      };
      
      setWorkflowData(prev => ({ ...prev, s88_result: s88Result }));
      setWorkflowStage('s88_complete');
      setTimeout(() => {
        setActiveTab('results');
        setExpandedSections(prev => ({ ...prev, section88: true }));
      }, 200);
    }, 1500);
  };

  const runActivityStatus = () => {
    setWorkflowStage('activity_processing');
    
    setTimeout(() => {
      // Determine activity status based on compliance
      const hasIssues = assessmentResults.issues.length > 0;
      
      const statusResult = {
        status: hasIssues ? 'Restricted Discretionary' : 'Permitted',
        rule: 'GRZ-R1',
        explanation: hasIssues 
          ? 'Non-compliance with standards triggers resource consent requirement'
          : 'Fully compliant with all district plan standards',
        next_steps: hasIssues ? ['compliance_matrix'] : null,
        canProceed: true,
        timestamp: new Date().toISOString(),
        duration: '1.5s'
      };
      
      setWorkflowData(prev => ({ ...prev, activity_status: statusResult }));
      setWorkflowStage('activity_complete');
      setTimeout(() => {
        setActiveTab('results');
        setExpandedSections(prev => ({ ...prev, scopingReview: true }));
      }, 200);
    }, 1500);
  };

  const runComplianceMatrix = () => {
    setWorkflowStage('compliance_processing');
    
    setTimeout(() => {
      const complianceResult = {
        rules_assessed: assessmentResults.issues.map(i => i.ruleReference),
        non_compliant: assessmentResults.issues,
        compliant: [],
        critical_issues: assessmentResults.issues.filter(i => i.severity === 'critical'),
        next_steps: ['notification_assessment'],
        timestamp: new Date().toISOString(),
        duration: '1.5s'
      };
      
      setWorkflowData(prev => ({ ...prev, compliance_matrix: complianceResult }));
      setWorkflowStage('compliance_complete');
      setTimeout(() => {
        setActiveTab('results');
        setExpandedSections(prev => ({ ...prev, scopingReview: true }));
      }, 200);
    }, 1500);
  };

  const runNotificationAssessment = () => {
    setWorkflowStage('notification_processing');
    
    setTimeout(() => {
      const notificationResult = {
        type: assessmentResults.issues.length > 1 ? 'Limited Notification' : 'No Notification',
        statutory: assessmentResults.issues.length > 1 ? 'RMA s95B' : 'RMA s95A',
        triggers: assessmentResults.issues.length > 1 
          ? ['Multiple standard breaches', 'Effects on adjoining properties']
          : [],
        process: {
          timeframe: assessmentResults.issues.length > 1 
            ? '10 working days notification period'
            : 'Consent processed within 20 working days'
        },
        timestamp: new Date().toISOString(),
        duration: '1.5s'
      };
      
      setWorkflowData(prev => ({ ...prev, notification_decision: notificationResult }));
      setWorkflowStage('notification_complete');
      setTimeout(() => {
        setActiveTab('results');
        setExpandedSections(prev => ({ ...prev, notification: true }));
      }, 200);
    }, 1500);
  };

  const runFullWorkflow = () => {
    setWorkflowStage('full_workflow_start');
    // Chain all steps
    runS88Completeness();
    setTimeout(() => runActivityStatus(), 2000);
    setTimeout(() => runComplianceMatrix(), 4000);
    setTimeout(() => runNotificationAssessment(), 6000);
    setTimeout(() => { setActiveTab('results'); setExpandedSections(prev => ({ ...prev, reviewSummary: true })); }, 9000);
    setTimeout(() => setWorkflowStage('full_workflow_complete'), 7500);
  };

  const runS92Request = () => {
    setWorkflowStage('s92_processing');
    
    setTimeout(() => {
      const s92Result = {
        requestType: 'Further Information Required',
        missingItems: [
          'Detailed site plans showing existing and proposed buildings',
          'Traffic impact assessment for vehicle movements',
          'Written approvals from affected neighbors at 15 and 19 Beach Road',
          'Assessment of Environmental Effects addressing noise and visual effects'
        ],
        statutoryBasis: 'RMA s92(1)',
        timeframe: '15 working days for applicant response',
        note: 'Clock stops until information received',
        timestamp: new Date().toISOString(),
        duration: '1.5s'
      };
      
      setWorkflowData(prev => ({ ...prev, s92_request: s92Result }));
      setWorkflowStage('s92_complete');
    }, 1500);
  };

  const runConditionsDrafting = () => {
    setWorkflowStage('conditions_processing');
    
    setTimeout(() => {
      const conditionsResult = {
        activityType: 'Controlled Activity',
        conditions: [
          {
            number: 1,
            category: 'Hours of Operation',
            condition: 'The activity shall only operate between 7:00am and 7:00pm Monday to Saturday, with no operation on Sundays or public holidays.'
          },
          {
            number: 2,
            category: 'Noise',
            condition: 'Noise from the activity shall not exceed 50dB LAeq when measured at the boundary of any residential site.'
          },
          {
            number: 3,
            category: 'Parking',
            condition: 'A minimum of 2 off-street parking spaces shall be provided and maintained on site at all times.'
          },
          {
            number: 4,
            category: 'Landscaping',
            condition: 'Screening vegetation shall be planted along the road boundary within 3 months of commencement and maintained thereafter.'
          }
        ],
        decision: 'Grant consent subject to conditions',
        note: 'Controlled activity must be granted - conditions address matters of control only',
        timestamp: new Date().toISOString(),
        duration: '1.5s'
      };
      
      setWorkflowData(prev => ({ ...prev, conditions: conditionsResult }));
      setWorkflowStage('conditions_complete');
    }, 1500);
  };

  const runS42AReport = () => {
    setWorkflowStage('s42a_processing');
    
    setTimeout(() => {
      const s42aResult = {
        reportType: "Planner's Report under s42A RMA",
        recommendation: assessmentResults.issues.length > 2 ? 'Decline' : 'Grant',
        summaryOfIssues: assessmentResults.issues.map(i => i.title),
        keyFindings: [
          'Application assessed under ' + (workflowData.activity_status?.status || 'Discretionary') + ' activity pathway',
          workflowData.compliance_matrix ? 
            `${workflowData.compliance_matrix.non_compliant.length} non-compliances identified` : 
            'Compliance assessment completed',
          workflowData.notification_decision ? 
            workflowData.notification_decision.type + ' determined under ' + workflowData.notification_decision.statutory :
            'Notification decision pending'
        ],
        sections: [
          'Executive Summary',
          'Site Description and Locality',
          'Proposal Description', 
          'Activity Status and Notification',
          'Assessment of Effects',
          'District Plan Assessment',
          'Part 2 RMA Assessment',
          'Recommendation and Conditions'
        ],
        timeToGenerate: '2-3 minutes for full DOCX report',
        timestamp: new Date().toISOString(),
        duration: '1.5s'
      };
      
      setWorkflowData(prev => ({ ...prev, s42a_report: s42aResult }));
      setWorkflowStage('s42a_complete');
    }, 1500);
  };

  const resetWorkflow = () => {
    setWorkflowStage(null);
    setShowWorkflowMenu(true);
  };

  const formatTimestamp = (isoString) => {
    if (!isoString) return '';
    const date = new Date(isoString);
    const today = new Date();
    const isToday = date.toDateString() === today.toDateString();
    
    if (isToday) {
      return date.toLocaleTimeString('en-NZ', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      });
    } else {
      return date.toLocaleDateString('en-NZ', { 
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
    }
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '32px 16px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    },
    card: {
      maxWidth: '1200px',
      margin: '0 auto',
      background: 'rgba(255, 255, 255, 0.98)',
      borderRadius: '24px',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      overflow: 'hidden'
    },
    header: {
      background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
      padding: '32px',
      color: 'white'
    },
    title: {
      fontSize: '32px',
      fontWeight: '800',
      margin: '0 0 8px 0'
    },
    subtitle: {
      fontSize: '16px',
      opacity: 0.9,
      margin: 0
    },
    tabs: {
      display: 'flex',
      borderBottom: '2px solid #e5e7eb',
      background: 'linear-gradient(to bottom, #f9fafb, #ffffff)',
      padding: '0 24px'
    },
    tab: (isActive) => ({
      padding: '16px 32px',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      fontSize: '15px',
      fontWeight: '600',
      color: isActive ? '#2563eb' : '#6b7280',
      borderBottom: isActive ? '3px solid #2563eb' : '3px solid transparent',
      marginBottom: '-2px',
      transition: 'all 0.3s ease'
    }),
    content: {
      padding: '32px'
    },
    uploadZone: {
      border: '3px dashed #cbd5e1',
      borderRadius: '16px',
      padding: '64px 32px',
      textAlign: 'center',
      background: 'linear-gradient(to bottom, #f8fafc, #f1f5f9)',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    button: {
      background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
      color: 'white',
      padding: '14px 32px',
      borderRadius: '12px',
      border: 'none',
      cursor: 'pointer',
      fontSize: '16px',
      fontWeight: '600',
      boxShadow: '0 10px 15px -3px rgba(37, 99, 235, 0.3)',
      transition: 'all 0.3s ease',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px'
    },
    workflowCard: {
      background: 'white',
      borderRadius: '16px',
      padding: '24px',
      border: '2px solid #e5e7eb',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginBottom: '16px'
    },
    input: {
      width: '100%',
      padding: '12px 16px',
      borderRadius: '10px',
      border: '2px solid #e5e7eb',
      fontSize: '15px',
      transition: 'all 0.3s ease',
      background: 'white'
    },
    label: {
      display: 'block',
      fontSize: '14px',
      fontWeight: '600',
      color: '#374151',
      marginBottom: '8px'
    },
    ruleCard: {
      background: 'white',
      borderRadius: '12px',
      padding: '20px',
      border: '1px solid #e5e7eb',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    statusBadge: (status) => {
      const colors = {
        'Permitted': { bg: '#dcfce7', text: '#166534', border: '#86efac' },
        'Controlled': { bg: '#dbeafe', text: '#1e40af', border: '#93c5fd' },
        'Restricted Discretionary': { bg: '#fef3c7', text: '#92400e', border: '#fde047' },
        'Discretionary': { bg: '#fed7aa', text: '#9a3412', border: '#fdba74' },
        'Non-Complying': { bg: '#fee2e2', text: '#991b1b', border: '#fecaca' }
      };
      const color = colors[status] || colors['Permitted'];
      return {
        padding: '4px 12px',
        background: color.bg,
        color: color.text,
        border: `2px solid ${color.border}`,
        borderRadius: '6px',
        fontSize: '12px',
        fontWeight: '700'
      };
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Header */}
        <div style={styles.header}>
          <h1 style={styles.title}>CHORD Consent Assessment & Scoping App</h1>
          <p style={styles.subtitle}>AI-Powered Resource Consent Processing</p>
        </div>

        {/* Tabs */}
        <div style={styles.tabs}>
          <button onClick={() => setActiveTab('upload')} style={styles.tab(activeTab === 'upload')}>
            Upload
          </button>
          <button onClick={() => setActiveTab('assessment')} style={styles.tab(activeTab === 'assessment')}>
            Assessment
          </button>
          <button onClick={() => setActiveTab('rules')} style={styles.tab(activeTab === 'rules')}>
            Databases
          </button>
          <button onClick={() => setActiveTab('workflow')} style={styles.tab(activeTab === 'workflow')}>
            Workflow
          </button>
          <button onClick={() => setActiveTab('results')} style={styles.tab(activeTab === 'results')}>
            Results
          </button>
        </div>

        {/* Content */}
        <div style={styles.content}>
          {/* Upload Tab */}
          {activeTab === 'upload' && (
            <div>
              <label htmlFor="file-upload">
                <div style={{
                  ...styles.uploadZone,
                  borderColor: isProcessing ? '#2563eb' : uploadedFile ? '#10b981' : '#cbd5e1',
                  background: isProcessing ? 'linear-gradient(to bottom, #eff6ff, #dbeafe)' : uploadedFile ? 'linear-gradient(to bottom, #f0fdf4, #dcfce7)' : 'linear-gradient(to bottom, #f8fafc, #f1f5f9)'
                }}>
                  {isProcessing ? (
                    <>
                      <div style={{ 
                        width: '64px', 
                        height: '64px', 
                        border: '6px solid #dbeafe',
                        borderTop: '6px solid #2563eb',
                        borderRadius: '50%',
                        margin: '0 auto 16px',
                        animation: 'spin 1s linear infinite'
                      }} />
                      <p style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px', color: '#2563eb' }}>
                        Processing Document...
                      </p>
                      <div style={{ width: '300px', margin: '0 auto', background: '#e5e7eb', borderRadius: '10px', height: '12px', overflow: 'hidden' }}>
                        <div style={{ 
                          width: `${uploadProgress}%`, 
                          height: '100%', 
                          background: 'linear-gradient(90deg, #2563eb 0%, #3b82f6 100%)',
                          transition: 'width 0.3s ease'
                        }} />
                      </div>
                      <p style={{ fontSize: '13px', color: '#64748b', marginTop: '8px' }}>
                        {uploadProgress}% complete
                      </p>
                    </>
                  ) : uploadedFile ? (
                    <>
                      <CheckCircle style={{ width: '64px', height: '64px', color: '#10b981', margin: '0 auto 16px' }} />
                      <p style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px', color: '#10b981' }}>
                        Document Uploaded Successfully
                      </p>
                      <div style={{ 
                        display: 'inline-block',
                        padding: '12px 20px', 
                        background: 'white',
                        border: '2px solid #10b981',
                        color: '#047857',
                        borderRadius: '10px',
                        fontWeight: '600',
                        marginBottom: '16px'
                      }}>
                        <FileText style={{ display: 'inline', marginRight: '8px' }} size={18} />
                        {uploadedFile.name}
                      </div>
                      <p style={{ fontSize: '13px', color: '#64748b' }}>
                        {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB • Uploaded {new Date(uploadedFile.uploadedAt).toLocaleTimeString()}
                      </p>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          setUploadedFile(null);
                          setUploadProgress(0);
                        }}
                        style={{
                          marginTop: '16px',
                          padding: '10px 24px',
                          background: 'white',
                          border: '2px solid #ef4444',
                          color: '#ef4444',
                          borderRadius: '8px',
                          fontWeight: '600',
                          cursor: 'pointer',
                          fontSize: '14px'
                        }}
                      >
                        Upload Different File
                      </button>
                    </>
                  ) : (
                    <>
                      <Upload style={{ width: '64px', height: '64px', color: '#2563eb', margin: '0 auto 16px' }} />
                      <p style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>
                        Upload Plans or Documents
                      </p>
                      <p style={{ fontSize: '15px', color: '#64748b', marginBottom: '24px' }}>
                        PDF, DWG, or images accepted • Max 50MB
                      </p>
                      <div style={{
                        display: 'inline-block',
                        padding: '12px 24px',
                        background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                        color: 'white',
                        borderRadius: '10px',
                        fontWeight: '600',
                        boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.3)'
                      }}>
                        Click to Browse Files
                      </div>
                    </>
                  )}
                </div>
              </label>
              <input
                id="file-upload"
                type="file"
                style={{ display: 'none' }}
                onChange={handleFileUpload}
                accept=".pdf,.dwg,.png,.jpg,.jpeg"
                disabled={isProcessing}
              />
            </div>
          )}

          {/* Assessment Tab */}
          {activeTab === 'assessment' && (
            <div style={{ display: 'grid', gap: '24px' }}>
              {/* Header */}
              <div style={{ 
                background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                borderRadius: '16px',
                padding: '24px',
                color: 'white'
              }}>
                <h2 style={{ margin: '0 0 8px 0', fontSize: '24px', fontWeight: '800' }}>
                  Resource Consent Assessment
                </h2>
                <p style={{ fontSize: '14px', opacity: 0.9, margin: 0 }}>
                  Automated RMA workflow processing
                </p>
              </div>

              {/* Section 1: Generate Summary */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '28px',
                border: '2px solid #e5e7eb',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}>
                <h3 style={{ margin: '0 0 16px 0', fontSize: '20px', fontWeight: '700', color: '#1e293b' }}>
                  1. Generate Summary
                </h3>
                <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#64748b' }}>
                  Extract key information from uploaded documents
                </p>
                <button
                  onClick={() => { setActiveTab('results'); setExpandedSections(prev => ({ ...prev, reviewSummary: true })); }}
                  style={styles.button}
                >
                  <FileText size={20} />
                  Generate Application Summary
                </button>
              </div>

              {/* Section 2: Pre-application Check */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '28px',
                border: '2px solid #e5e7eb',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}>
                <h3 style={{ margin: '0 0 16px 0', fontSize: '20px', fontWeight: '700', color: '#1e293b' }}>
                  2. Pre-application Check
                </h3>
                <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#64748b' }}>
                  Verify application meets basic requirements
                </p>
                <button
                  onClick={() => { setActiveTab('results'); setExpandedSections(prev => ({ ...prev, preApplication: true })); }}
                  style={styles.button}
                >
                  <CheckCircle size={20} />
                  Run Pre-application Check
                </button>
              </div>

              {/* Section 3: Section 88 Check */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '28px',
                border: '2px solid #e5e7eb',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}>
                <h3 style={{ margin: '0 0 16px 0', fontSize: '20px', fontWeight: '700', color: '#1e293b' }}>
                  3. Section 88 Check
                </h3>
                <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#64748b' }}>
                  RMA completeness assessment under s88
                </p>
                <button
                  onClick={() => { setActiveTab('results'); setExpandedSections(prev => ({ ...prev, section88: true })); }}
                  style={styles.button}
                >
                  <List size={20} />
                  Perform s88 Completeness Check
                </button>
              </div>

              {/* Section 4: General Scoping Review */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '28px',
                border: '2px solid #e5e7eb',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}>
                <h3 style={{ margin: '0 0 16px 0', fontSize: '20px', fontWeight: '700', color: '#1e293b' }}>
                  4. General Scoping Review
                </h3>
                <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#64748b' }}>
                  Identify applicable planning provisions
                </p>
                <button
                  onClick={() => alert('General Scoping Review functionality will be built here')}
                  style={styles.button}
                >
                  <GitBranch size={20} />
                  Conduct Scoping Review
                </button>
              </div>

              {/* Section 5: Notification Assessment */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '28px',
                border: '2px solid #e5e7eb',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}>
                <h3 style={{ margin: '0 0 16px 0', fontSize: '20px', fontWeight: '700', color: '#1e293b' }}>
                  5. Notification Assessment
                </h3>
                <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#64748b' }}>
                  Determine notification requirements under RMA
                </p>
                <button
                  onClick={() => alert('Notification Assessment functionality will be built here')}
                  style={styles.button}
                >
                  <AlertCircle size={20} />
                  Assess Notification Requirements
                </button>
              </div>
            </div>
          )}

          {/* Rules Tab */}
          {activeTab === 'rules' && (
            <div style={{ display: 'grid', gap: '24px' }}>
              {/* Header */}
              <div style={{ 
                background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                borderRadius: '16px',
                padding: '24px',
                color: 'white'
              }}>
                <h2 style={{ margin: '0 0 8px 0', fontSize: '24px', fontWeight: '800' }}>
                  Planning Databases
                </h2>
                <p style={{ fontSize: '14px', opacity: 0.9, margin: 0 }}>
                  Comprehensive resource management reference library
                </p>
              </div>

              {/* DISTRICT PLANS */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '28px',
                border: '2px solid #e5e7eb',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                <div 
                  onClick={() => toggleZone('district-plans')}
                  style={{ marginBottom: expandedZones['district-plans'] ? '24px' : 0 }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '700', color: '#1e293b' }}>
                      DISTRICT PLANS
                    </h3>
                    {expandedZones['district-plans'] ? (
                      <ChevronUp style={{ color: '#2563eb', width: '24px', height: '24px' }} />
                    ) : (
                      <ChevronDown style={{ color: '#64748b', width: '24px', height: '24px' }} />
                    )}
                  </div>
                </div>
                {expandedZones['district-plans'] && (
                  <div style={{ paddingTop: '16px', fontSize: '14px', color: '#475569', lineHeight: '1.6' }}>
                    <p><strong>District Plan:</strong> Sets out objectives, policies, and rules for land use and development within the district. Includes zoning provisions (Residential, Commercial, Industrial, Rural, Special Purpose zones), district-wide rules (subdivision, earthworks, vegetation removal), and overlay controls (historic heritage, natural hazards, natural features).</p>
                    <p style={{ marginTop: '12px' }}><strong>Key Components:</strong> Strategic objectives and policies, zone-specific provisions, district-wide standards, overlays and special areas, schedules (heritage, natural areas, sites of significance), and appendices.</p>
                  </div>
                )}
              </div>

              {/* DISTRICT RULES AND REPORTS */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '28px',
                border: '2px solid #e5e7eb',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                <div 
                  onClick={() => toggleZone('district-rules')}
                  style={{ marginBottom: expandedZones['district-rules'] ? '24px' : 0 }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '700', color: '#1e293b' }}>
                      DISTRICT RULES AND REPORTS
                    </h3>
                    {expandedZones['district-rules'] ? (
                      <ChevronUp style={{ color: '#2563eb', width: '24px', height: '24px' }} />
                    ) : (
                      <ChevronDown style={{ color: '#64748b', width: '24px', height: '24px' }} />
                    )}
                  </div>
                </div>
                {expandedZones['district-rules'] && (
                  <div style={{ paddingTop: '16px', fontSize: '14px', color: '#475569', lineHeight: '1.6' }}>
                    <p><strong>Zone-Specific Standards:</strong> Building height (8m for residential), setbacks (front, side, rear), site coverage (40-60% depending on zone), outdoor living space requirements (30m minimum), and parking provisions.</p>
                    <p style={{ marginTop: '12px' }}><strong>Section 32 Evaluation Reports:</strong> Analysis of plan provisions including costs, benefits, efficiency, and effectiveness. Reports assess environmental, economic, social, and cultural effects of planning rules.</p>
                  </div>
                )}
              </div>

              {/* RESERVE MANAGEMENT PLANS */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '28px',
                border: '2px solid #e5e7eb',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                <div 
                  onClick={() => toggleZone('reserve-plans')}
                  style={{ marginBottom: expandedZones['reserve-plans'] ? '24px' : 0 }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '700', color: '#1e293b' }}>
                      RESERVE MANAGEMENT PLANS
                    </h3>
                    {expandedZones['reserve-plans'] ? (
                      <ChevronUp style={{ color: '#2563eb', width: '24px', height: '24px' }} />
                    ) : (
                      <ChevronDown style={{ color: '#64748b', width: '24px', height: '24px' }} />
                    )}
                  </div>
                </div>
                {expandedZones['reserve-plans'] && (
                  <div style={{ paddingTop: '16px', fontSize: '14px', color: '#475569', lineHeight: '1.6' }}>
                    <p><strong>Reserve Management Plans:</strong> Guide management of public reserves and parks. Include policies on conservation, recreation, cultural heritage, public access, and amenity values. Prepared under the Reserves Act 1977.</p>
                    <p style={{ marginTop: '12px' }}><strong>Coverage:</strong> Regional parks, domain and local parks, sports reserves, scenic reserves, recreation reserves, and historic reserves. Set out maintenance standards, permitted activities, and development controls.</p>
                  </div>
                )}
              </div>

              {/* REGIONAL PLANS */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '28px',
                border: '2px solid #e5e7eb',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                <div 
                  onClick={() => toggleZone('regional-plans')}
                  style={{ marginBottom: expandedZones['regional-plans'] ? '24px' : 0 }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '700', color: '#1e293b' }}>
                      REGIONAL PLANS
                    </h3>
                    {expandedZones['regional-plans'] ? (
                      <ChevronUp style={{ color: '#2563eb', width: '24px', height: '24px' }} />
                    ) : (
                      <ChevronDown style={{ color: '#64748b', width: '24px', height: '24px' }} />
                    )}
                  </div>
                </div>
                {expandedZones['regional-plans'] && (
                  <div style={{ paddingTop: '16px', fontSize: '14px', color: '#475569', lineHeight: '1.6' }}>
                    <p><strong>Regional Functions:</strong> Water quality and quantity, air quality, coastal marine area management, contaminated land, natural hazards, indigenous biodiversity, and significant ecological areas. Regional rules address discharges, earthworks, vegetation clearance, and water takes.</p>
                    <p style={{ marginTop: '12px' }}><strong>Key Provisions:</strong> Regional coastal plan, regional water and soil plan, regional air quality plan, stormwater management, and erosion and sediment control standards.</p>
                  </div>
                )}
              </div>

              {/* NATIONAL STANDARDS */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '28px',
                border: '2px solid #e5e7eb',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                <div 
                  onClick={() => toggleZone('national-standards')}
                  style={{ marginBottom: expandedZones['national-standards'] ? '24px' : 0 }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '700', color: '#1e293b' }}>
                      NATIONAL ENVIRONMENTAL STANDARDS
                    </h3>
                    {expandedZones['national-standards'] ? (
                      <ChevronUp style={{ color: '#2563eb', width: '24px', height: '24px' }} />
                    ) : (
                      <ChevronDown style={{ color: '#64748b', width: '24px', height: '24px' }} />
                    )}
                  </div>
                </div>
                {expandedZones['national-standards'] && (
                  <div style={{ paddingTop: '16px', fontSize: '14px', color: '#475569', lineHeight: '1.6' }}>
                    <p><strong>NES for Freshwater (2020):</strong> Controls on activities affecting natural wetlands, livestock exclusion from waterbodies, intensive winter grazing standards.</p>
                    <p style={{ marginTop: '12px' }}><strong>NES for Air Quality (2004):</strong> Standards for PM10, carbon monoxide, nitrogen dioxide, ozone, sulphur dioxide. Includes standards for domestic fires and outdoor burning.</p>
                    <p style={{ marginTop: '12px' }}><strong>NES for Assessing and Managing Contaminants in Soil to Protect Human Health (2011, amended 2012):</strong> Protects human health from soil contamination on former industrial sites (HAIL - Hazardous Activities and Industries List). Requires soil testing and management plans.</p>
                    <p style={{ marginTop: '12px' }}><strong>NES for Plantation Forestry (2017, amended 2022):</strong> Regulates plantation forestry activities including afforestation, harvesting, earthworks, stream crossings, replanting, and quarrying within plantations.</p>
                    <p style={{ marginTop: '12px' }}><strong>NES for Telecommunication Facilities (2016):</strong> Enables deployment of telecommunications infrastructure. Sets permitted activity standards for antennas, cabinets, and small cell installations.</p>
                    <p style={{ marginTop: '12px' }}><strong>NES for Sources of Human Drinking Water (2007, amended 2022):</strong> Protects sources of human drinking water from contamination. Requires regional councils to notify water suppliers of certain consents.</p>
                  </div>
                )}
              </div>

              {/* NATIONAL POLICY STATEMENTS */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '28px',
                border: '2px solid #e5e7eb',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                <div 
                  onClick={() => toggleZone('national-policy')}
                  style={{ marginBottom: expandedZones['national-policy'] ? '24px' : 0 }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '700', color: '#1e293b' }}>
                      NATIONAL POLICY STATEMENTS
                    </h3>
                    {expandedZones['national-policy'] ? (
                      <ChevronUp style={{ color: '#2563eb', width: '24px', height: '24px' }} />
                    ) : (
                      <ChevronDown style={{ color: '#64748b', width: '24px', height: '24px' }} />
                    )}
                  </div>
                </div>
                {expandedZones['national-policy'] && (
                  <div style={{ paddingTop: '16px', fontSize: '14px', color: '#475569', lineHeight: '1.6' }}>
                    <p><strong>NPS on Urban Development (2020, amended 2023):</strong> Directs councils to enable housing supply and urban intensification in tier 1 and 2 urban areas. Requires removal of restrictive planning rules, Future Development Strategies, and Housing and Business Capacity Assessments.</p>
                    <p style={{ marginTop: '12px' }}><strong>NPS for Freshwater Management (2020, amended 2023):</strong> Framework for managing freshwater including setting environmental limits, protecting significant values, achieving Te Mana o te Wai, and implementing Stock Exclusion Regulations.</p>
                    <p style={{ marginTop: '12px' }}><strong>NPS for Indigenous Biodiversity (2023):</strong> Took effect August 2023. Directs councils to identify Significant Natural Areas (SNAs), protect indigenous biodiversity, and achieve no net loss of indigenous vegetation extent nationally.</p>
                    <p style={{ marginTop: '12px' }}><strong>NPS for Highly Productive Land (2022):</strong> Took effect October 2022. Protects versatile land for primary production. Restricts urban rezoning of LUC 1-3 soils and fragmentation of productive land.</p>
                    <p style={{ marginTop: '12px' }}><strong>New Zealand Coastal Policy Statement (2010):</strong> Mandatory policy for coastal environment management. Addresses preservation of natural character, subdivision and development, public access, indigenous biodiversity, and coastal hazards.</p>
                    <p style={{ marginTop: '12px' }}><strong>NPS for Renewable Electricity Generation (2011):</strong> Recognizes national significance of renewable electricity. Directs councils to provide for development, operation, maintenance and upgrading of renewable electricity generation activities.</p>
                    <p style={{ marginTop: '12px' }}><strong>NPS for Electricity Transmission (2008):</strong> Recognizes national significance of electricity transmission network. Provides for operation, maintenance, and upgrade of National Grid infrastructure.</p>
                  </div>
                )}
              </div>

              {/* LEGISLATION */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '28px',
                border: '2px solid #e5e7eb',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                <div 
                  onClick={() => toggleZone('legislation')}
                  style={{ marginBottom: expandedZones['legislation'] ? '24px' : 0 }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '700', color: '#1e293b' }}>
                      LEGISLATION
                    </h3>
                    {expandedZones['legislation'] ? (
                      <ChevronUp style={{ color: '#2563eb', width: '24px', height: '24px' }} />
                    ) : (
                      <ChevronDown style={{ color: '#64748b', width: '24px', height: '24px' }} />
                    )}
                  </div>
                </div>
                {expandedZones['legislation'] && (
                  <div style={{ paddingTop: '16px', fontSize: '14px', color: '#475569', lineHeight: '1.6' }}>
                    <p><strong>Resource Management Act 1991 (as amended):</strong> Primary legislation for environmental management. Part 2 (purpose and principles - s5-8), Part 6 (resource consents - s87-150), Part 9 (restrictions on use of land and subdivision), Schedule 1 (plan preparation), Schedule 4 (AEE requirements).</p>
                    <p style={{ marginTop: '12px' }}><strong>Building Act 2004:</strong> Regulates building work and establishes building consent process. Includes Building Code compliance, durability provisions, accessibility requirements, and energy efficiency standards.</p>
                    <p style={{ marginTop: '12px' }}><strong>Local Government Act 2002 (as amended):</strong> Framework for local authority decision-making, long-term planning, consultation requirements, delegation powers, and bylaw-making.</p>
                    <p style={{ marginTop: '12px' }}><strong>Heritage New Zealand Pouhere Taonga Act 2014:</strong> Protection of archaeological sites and heritage places. Requires archaeological authority for modification of pre-1900 sites. Maintains New Zealand Heritage List.</p>
                    <p style={{ marginTop: '12px' }}><strong>Reserves Act 1977:</strong> Classification, management, and protection of public reserves. Covers scenic, recreation, historic, nature, and government purpose reserves.</p>
                  </div>
                )}
              </div>

              {/* MINISTRY GUIDANCE */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '28px',
                border: '2px solid #e5e7eb',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                <div 
                  onClick={() => toggleZone('ministry-guidance')}
                  style={{ marginBottom: expandedZones['ministry-guidance'] ? '24px' : 0 }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '700', color: '#1e293b' }}>
                      MINISTRY GUIDANCE
                    </h3>
                    {expandedZones['ministry-guidance'] ? (
                      <ChevronUp style={{ color: '#2563eb', width: '24px', height: '24px' }} />
                    ) : (
                      <ChevronDown style={{ color: '#64748b', width: '24px', height: '24px' }} />
                    )}
                  </div>
                </div>
                {expandedZones['ministry-guidance'] && (
                  <div style={{ paddingTop: '16px', fontSize: '14px', color: '#475569', lineHeight: '1.6' }}>
                    <p><strong>MfE Good Practice Guides:</strong> Resource consent processes, plan development, environmental assessment, notification decisions, hearing procedures, and decision-writing.</p>
                    <p style={{ marginTop: '12px' }}><strong>User Guides for NPS/NES:</strong> Implementation guidance for national direction instruments including interpretation of requirements, case studies, and technical specifications.</p>
                    <p style={{ marginTop: '12px' }}><strong>MBIE Building Code Handbooks:</strong> Acceptable solutions and verification methods for Building Code compliance. Technical design guides for specific building elements.</p>
                  </div>
                )}
              </div>

              {/* RESOURCE CONSENT DECISIONS */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '28px',
                border: '2px solid #e5e7eb',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                <div 
                  onClick={() => toggleZone('consent-decisions')}
                  style={{ marginBottom: expandedZones['consent-decisions'] ? '24px' : 0 }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '700', color: '#1e293b' }}>
                      RESOURCE CONSENT DECISIONS
                    </h3>
                    {expandedZones['consent-decisions'] ? (
                      <ChevronUp style={{ color: '#2563eb', width: '24px', height: '24px' }} />
                    ) : (
                      <ChevronDown style={{ color: '#64748b', width: '24px', height: '24px' }} />
                    )}
                  </div>
                </div>
                {expandedZones['consent-decisions'] && (
                  <div style={{ paddingTop: '16px', fontSize: '14px', color: '#475569', lineHeight: '1.6' }}>
                    <p><strong>Auckland Council Decisions Database:</strong> Searchable repository of resource consent decisions including granted, declined, and appealed applications. Contains decision reports, conditions of consent, and commissioner findings.</p>
                    <p style={{ marginTop: '12px' }}><strong>Precedent Value:</strong> While not binding, previous decisions provide guidance on interpretation of plan provisions, assessment of effects, conditions imposed, and consideration of s104 matters.</p>
                  </div>
                )}
              </div>

              {/* MINISTRY STANDARDS AND POLICIES */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '28px',
                border: '2px solid #e5e7eb',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                <div 
                  onClick={() => toggleZone('ministry-standards')}
                  style={{ marginBottom: expandedZones['ministry-standards'] ? '24px' : 0 }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '700', color: '#1e293b' }}>
                      MINISTRY STANDARDS AND POLICIES
                    </h3>
                    {expandedZones['ministry-standards'] ? (
                      <ChevronUp style={{ color: '#2563eb', width: '24px', height: '24px' }} />
                    ) : (
                      <ChevronDown style={{ color: '#64748b', width: '24px', height: '24px' }} />
                    )}
                  </div>
                </div>
                {expandedZones['ministry-standards'] && (
                  <div style={{ paddingTop: '16px', fontSize: '14px', color: '#475569', lineHeight: '1.6' }}>
                    <p><strong>Water Quality Standards:</strong> ANZECC guidelines for fresh and marine water quality, sediment quality guidelines, bathing water standards.</p>
                    <p style={{ marginTop: '12px' }}><strong>Erosion and Sediment Control Guidelines (GD05):</strong> Auckland-specific technical standards for earthworks, erosion control devices, sediment retention, chemical treatment.</p>
                    <p style={{ marginTop: '12px' }}><strong>Traffic and Transport Standards:</strong> NZTA Austroads guides for road design, traffic impact assessment thresholds, parking demand calculations, intersection design.</p>
                  </div>
                )}
              </div>

              {/* EXPERT REPORTS */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '28px',
                border: '2px solid #e5e7eb',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                <div 
                  onClick={() => toggleZone('expert-reports')}
                  style={{ marginBottom: expandedZones['expert-reports'] ? '24px' : 0 }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '700', color: '#1e293b' }}>
                      EXPERT REPORTS
                    </h3>
                    {expandedZones['expert-reports'] ? (
                      <ChevronUp style={{ color: '#2563eb', width: '24px', height: '24px' }} />
                    ) : (
                      <ChevronDown style={{ color: '#64748b', width: '24px', height: '24px' }} />
                    )}
                  </div>
                </div>
                {expandedZones['expert-reports'] && (
                  <div style={{ paddingTop: '16px', fontSize: '14px', color: '#475569', lineHeight: '1.6' }}>
                    <p><strong>Standard Report Types:</strong> Traffic impact assessments, geotechnical reports, ecological assessments, archaeological surveys, landscape and visual assessments, acoustic reports, contaminated land assessments, infrastructure servicing reports.</p>
                    <p style={{ marginTop: '12px' }}><strong>Author Qualifications:</strong> Reports must be prepared by suitably qualified and experienced practitioners. Expert evidence code of conduct applies for Environment Court proceedings.</p>
                  </div>
                )}
              </div>

              {/* COURT DECISIONS */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '28px',
                border: '2px solid #e5e7eb',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}>
                <div 
                  onClick={() => toggleZone('court-decisions')}
                  style={{ marginBottom: expandedZones['court-decisions'] ? '24px' : 0 }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '700', color: '#1e293b' }}>
                      COURT DECISIONS
                    </h3>
                    {expandedZones['court-decisions'] ? (
                      <ChevronUp style={{ color: '#2563eb', width: '24px', height: '24px' }} />
                    ) : (
                      <ChevronDown style={{ color: '#64748b', width: '24px', height: '24px' }} />
                    )}
                  </div>
                </div>
                {expandedZones['court-decisions'] && (
                  <div style={{ paddingTop: '16px', fontSize: '14px', color: '#475569', lineHeight: '1.6' }}>
                    <p><strong>Environment Court:</strong> Specialist court for RMA appeals and enforcement. Decisions establish legal precedent on RMA interpretation, effects assessment methodology, conditions of consent, and planning principles.</p>
                    <p style={{ marginTop: '12px' }}><strong>Higher Courts:</strong> High Court, Court of Appeal, and Supreme Court decisions on points of law. Key cases include King Salmon (policy interpretation), Dye v Auckland Regional Council (effects assessment), Westfield v Hamilton CC (discretionary activities).</p>
                    <p style={{ marginTop: '12px' }}><strong>Access:</strong> Environment Court decisions available through MfE website and NZLII database. Searchable by location, activity type, planning issue, and legislative provision.</p>
                  </div>
                )}
              </div>

            </div>
          )}

          {/* WORKFLOW TAB - NEW */}
          {activeTab === 'workflow' && (
            <div style={{ display: 'grid', gap: '24px' }}>
              {/* Workflow Menu */}
              {showWorkflowMenu && !workflowStage && (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                    <div>
                      <h2 style={{ fontSize: '24px', fontWeight: '700', margin: '0 0 8px 0' }}>
                        Select Assessment Workflow
                      </h2>
                      <p style={{ color: '#64748b', margin: 0 }}>
                        Choose which assessment path to follow based on your needs
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setActiveTab('assessment');
                        setShowWorkflowMenu(false);
                        setAssessmentResults(null);
                      }}
                      style={{
                        ...styles.button,
                        background: 'linear-gradient(135deg, #64748b 0%, #475569 100%)',
                        boxShadow: '0 4px 6px -1px rgba(71, 85, 105, 0.3)'
                      }}
                    >
                       New Assessment
                    </button>
                  </div>

                  {/* Single Task Options */}
                  <div style={{ display: 'grid', gap: '16px', marginBottom: '32px' }}>
                    <div 
                      style={styles.workflowCard}
                      onClick={runS88Completeness}
                      onMouseEnter={(e) => e.currentTarget.style.borderColor = '#2563eb'}
                      onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <CheckCircle size={32} color="#10b981" />
                        <div>
                          <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: '600' }}>
                            Check Completeness (s88)
                          </h3>
                          <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>
                            Verify application has all required information
                          </p>
                        </div>
                      </div>
                    </div>

                    <div 
                      style={styles.workflowCard}
                      onClick={runActivityStatus}
                      onMouseEnter={(e) => e.currentTarget.style.borderColor = '#2563eb'}
                      onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <List size={32} color="#3b82f6" />
                        <div>
                          <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: '600' }}>
                            Determine Activity Status
                          </h3>
                          <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>
                            Classify as Permitted, Controlled, Discretionary, etc.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div 
                      style={styles.workflowCard}
                      onClick={runComplianceMatrix}
                      onMouseEnter={(e) => e.currentTarget.style.borderColor = '#2563eb'}
                      onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <FileText size={32} color="#f59e0b" />
                        <div>
                          <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: '600' }}>
                            Check Compliance Matrix
                          </h3>
                          <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>
                            Assess compliance with all applicable rules
                          </p>
                        </div>
                      </div>
                    </div>

                    <div 
                      style={styles.workflowCard}
                      onClick={runNotificationAssessment}
                      onMouseEnter={(e) => e.currentTarget.style.borderColor = '#2563eb'}
                      onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <AlertCircle size={32} color="#8b5cf6" />
                        <div>
                          <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: '600' }}>
                            Notification Assessment
                          </h3>
                          <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>
                            Determine if public or limited notification required
                          </p>
                        </div>
                      </div>
                    </div>

                    <div 
                      style={styles.workflowCard}
                      onClick={runS92Request}
                      onMouseEnter={(e) => e.currentTarget.style.borderColor = '#2563eb'}
                      onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <X size={32} color="#ef4444" />
                        <div>
                          <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: '600' }}>
                            Generate s92 Request
                          </h3>
                          <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>
                            Request further information from applicant
                          </p>
                        </div>
                      </div>
                    </div>

                    <div 
                      style={styles.workflowCard}
                      onClick={runConditionsDrafting}
                      onMouseEnter={(e) => e.currentTarget.style.borderColor = '#2563eb'}
                      onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <CheckCircle size={32} color="#06b6d4" />
                        <div>
                          <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: '600' }}>
                            Draft Consent Conditions
                          </h3>
                          <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>
                            Generate conditions for controlled activities
                          </p>
                        </div>
                      </div>
                    </div>

                    <div 
                      style={styles.workflowCard}
                      onClick={runS42AReport}
                      onMouseEnter={(e) => e.currentTarget.style.borderColor = '#2563eb'}
                      onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <FileText size={32} color="#10b981" />
                        <div>
                          <h3 style={{ margin: '0 0 4px 0', fontSize: '18px', fontWeight: '600' }}>
                            Generate s42A Report
                          </h3>
                          <p style={{ margin: 0, fontSize: '14px', color: '#64748b' }}>
                            Create planner's report with recommendation
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Full Workflow Option */}
                  <div 
                    style={{
                      ...styles.workflowCard,
                      background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                      borderColor: '#2563eb',
                      borderWidth: '3px'
                    }}
                    onClick={runFullWorkflow}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <GitBranch size={36} color="#2563eb" />
                      <div>
                        <h3 style={{ margin: '0 0 4px 0', fontSize: '20px', fontWeight: '700', color: '#1e40af' }}>
                          Run Full Assessment Workflow
                        </h3>
                        <p style={{ margin: 0, fontSize: '14px', color: '#1e40af' }}>
                          Complete assessment from s88 through to notification decision
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Workflow Processing States */}
              {(workflowStage === 's88_processing' || workflowStage === 'activity_processing' || 
                workflowStage === 'compliance_processing' || workflowStage === 'notification_processing' ||
                workflowStage === 's92_processing' || workflowStage === 'conditions_processing' || 
                workflowStage === 's42a_processing') && (
                <div style={{ textAlign: 'center', padding: '48px' }}>
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    border: '4px solid #e5e7eb', 
                    borderTop: '4px solid #2563eb', 
                    borderRadius: '50%', 
                    animation: 'spin 1s linear infinite',
                    margin: '0 auto 16px'
                  }}></div>
                  <p style={{ fontSize: '18px', fontWeight: '600', color: '#1e293b' }}>
                    Processing {workflowStage.replace('_processing', '').replace('_', ' ')}...
                  </p>
                </div>
              )}

              {/* s88 Results */}
              {workflowStage === 's88_complete' && workflowData.s88_result && (
                <div>
                  <button
                    onClick={resetWorkflow}
                    style={{
                      ...styles.button,
                      background: 'linear-gradient(135deg, #64748b 0%, #475569 100%)',
                      marginBottom: '16px',
                      boxShadow: '0 4px 6px -1px rgba(71, 85, 105, 0.3)'
                    }}
                  >
                     Back to Workflow Menu
                  </button>

                  <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>
                    s88 Completeness Check
                  </h2>
                  
                  <div style={{
                    background: workflowData.s88_result.status === 'complete' 
                      ? 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)'
                      : 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)',
                    padding: '24px',
                    borderRadius: '12px',
                    marginBottom: '24px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                      {workflowData.s88_result.status === 'complete' ? (
                        <CheckCircle size={32} color="#166534" />
                      ) : (
                        <AlertTriangle size={32} color="#991b1b" />
                      )}
                      <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '700' }}>
                        Status: {workflowData.s88_result.status.toUpperCase()}
                      </h3>
                    </div>
                    
                    {workflowData.s88_result.missingItems.length > 0 && (
                      <div>
                        <p style={{ fontWeight: '600', marginBottom: '8px' }}>Missing Items:</p>
                        <ul style={{ margin: 0, paddingLeft: '20px' }}>
                          {workflowData.s88_result.missingItems.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {workflowData.s88_result.status === 'complete' && (
                    <button
                      onClick={runActivityStatus}
                      style={styles.button}
                    >
                      Continue to Activity Status 
                    </button>
                  )}
                </div>
              )}

              {/* Activity Status Results */}
              {workflowStage === 'activity_complete' && workflowData.activity_status && (
                <div>
                  <button
                    onClick={resetWorkflow}
                    style={{
                      ...styles.button,
                      background: 'linear-gradient(135deg, #64748b 0%, #475569 100%)',
                      marginBottom: '16px',
                      boxShadow: '0 4px 6px -1px rgba(71, 85, 105, 0.3)'
                    }}
                  >
                     Back to Workflow Menu
                  </button>

                  <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>
                    Activity Status Determination
                  </h2>
                  
                  <div style={{
                    background: 'linear-gradient(135deg, #fef3c7 0%, #fde047 100%)',
                    padding: '24px',
                    borderRadius: '12px',
                    marginBottom: '24px'
                  }}>
                    <h3 style={{ margin: '0 0 8px 0', fontSize: '20px', fontWeight: '700' }}>
                      {workflowData.activity_status.status}
                    </h3>
                    <p style={{ margin: '0 0 8px 0', fontSize: '14px' }}>
                      <strong>Rule:</strong> {workflowData.activity_status.rule}
                    </p>
                    <p style={{ margin: 0, fontSize: '14px' }}>
                      {workflowData.activity_status.explanation}
                    </p>
                  </div>

                  {workflowData.activity_status.next_steps && (
                    <button
                      onClick={runComplianceMatrix}
                      style={styles.button}
                    >
                      Continue to Compliance Matrix 
                    </button>
                  )}
                </div>
              )}

              {/* Compliance Matrix Results */}
              {workflowStage === 'compliance_complete' && workflowData.compliance_matrix && (
                <div>
                  <button
                    onClick={resetWorkflow}
                    style={{
                      ...styles.button,
                      background: 'linear-gradient(135deg, #64748b 0%, #475569 100%)',
                      marginBottom: '16px',
                      boxShadow: '0 4px 6px -1px rgba(71, 85, 105, 0.3)'
                    }}
                  >
                     Back to Workflow Menu
                  </button>

                  <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>
                    Compliance Matrix
                  </h2>
                  
                  <div style={{
                    background: 'white',
                    padding: '24px',
                    borderRadius: '12px',
                    border: '2px solid #e5e7eb',
                    marginBottom: '24px'
                  }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '12px' }}>
                      Non-Compliant Rules:
                    </h3>
                    {workflowData.compliance_matrix.non_compliant.map((issue, idx) => (
                      <div key={idx} style={{
                        background: '#fee2e2',
                        padding: '12px',
                        borderRadius: '8px',
                        marginBottom: '8px'
                      }}>
                        <p style={{ margin: '0 0 4px 0', fontWeight: '600' }}>
                          {issue.ruleReference}: {issue.title}
                        </p>
                        <p style={{ margin: 0, fontSize: '14px' }}>
                          {issue.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={runNotificationAssessment}
                    style={styles.button}
                  >
                    Continue to Notification Assessment 
                  </button>
                </div>
              )}

              {/* Notification Results */}
              {workflowStage === 'notification_complete' && workflowData.notification_decision && (
                <div>
                  <button
                    onClick={resetWorkflow}
                    style={{
                      ...styles.button,
                      background: 'linear-gradient(135deg, #64748b 0%, #475569 100%)',
                      marginBottom: '16px',
                      boxShadow: '0 4px 6px -1px rgba(71, 85, 105, 0.3)'
                    }}
                  >
                     Back to Workflow Menu
                  </button>

                  <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>
                    Notification Decision
                  </h2>
                  
                  <div style={{
                    background: workflowData.notification_decision.type === 'No Notification'
                      ? 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)'
                      : 'linear-gradient(135deg, #fef3c7 0%, #fde047 100%)',
                    padding: '24px',
                    borderRadius: '12px',
                    marginBottom: '24px'
                  }}>
                    <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', fontWeight: '700' }}>
                      {workflowData.notification_decision.type}
                    </h3>
                    <p style={{ margin: '0 0 8px 0', fontSize: '14px' }}>
                      <strong>Statutory Basis:</strong> {workflowData.notification_decision.statutory}
                    </p>
                    {workflowData.notification_decision.triggers.length > 0 && (
                      <>
                        <p style={{ margin: '8px 0 4px 0', fontSize: '14px', fontWeight: '600' }}>
                          Triggers:
                        </p>
                        <ul style={{ margin: 0, paddingLeft: '20px' }}>
                          {workflowData.notification_decision.triggers.map((trigger, idx) => (
                            <li key={idx} style={{ fontSize: '14px' }}>{trigger}</li>
                          ))}
                        </ul>
                      </>
                    )}
                    <p style={{ margin: '12px 0 0 0', fontSize: '14px' }}>
                      <strong>Process:</strong> {workflowData.notification_decision.process.timeframe}
                    </p>
                  </div>

                  <button
                    onClick={() => setActiveTab('results')}
                    style={styles.button}
                  >
                    View Full Results 
                  </button>
                </div>
              )}

              {/* s92 Request Results */}
              {workflowStage === 's92_complete' && workflowData.s92_request && (
                <div>
                  <button
                    onClick={resetWorkflow}
                    style={{
                      ...styles.button,
                      background: 'linear-gradient(135deg, #64748b 0%, #475569 100%)',
                      marginBottom: '16px',
                      boxShadow: '0 4px 6px -1px rgba(71, 85, 105, 0.3)'
                    }}
                  >
                     Back to Workflow Menu
                  </button>

                  <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>
                    s92 Request for Further Information
                  </h2>
                  
                  <div style={{
                    background: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)',
                    padding: '24px',
                    borderRadius: '12px',
                    marginBottom: '24px',
                    border: '2px solid #fca5a5'
                  }}>
                    <h3 style={{ margin: '0 0 12px 0', fontSize: '20px', fontWeight: '700', color: '#991b1b' }}>
                      {workflowData.s92_request.requestType}
                    </h3>
                    <p style={{ margin: '0 0 12px 0', fontSize: '14px' }}>
                      <strong>Statutory Basis:</strong> {workflowData.s92_request.statutoryBasis}
                    </p>
                    <p style={{ margin: '0 0 12px 0', fontSize: '14px', fontWeight: '600' }}>
                      Missing Information:
                    </p>
                    <ul style={{ margin: '0 0 12px 0', paddingLeft: '20px' }}>
                      {workflowData.s92_request.missingItems.map((item, idx) => (
                        <li key={idx} style={{ fontSize: '14px', marginBottom: '6px' }}>{item}</li>
                      ))}
                    </ul>
                    <p style={{ margin: '8px 0 4px 0', fontSize: '14px' }}>
                      <strong>Timeframe:</strong> {workflowData.s92_request.timeframe}
                    </p>
                    <div style={{ 
                      padding: '12px', 
                      background: '#fef2f2',
                      borderRadius: '8px',
                      marginTop: '12px',
                      border: '1px solid #fca5a5'
                    }}>
                      <p style={{ fontSize: '13px', fontWeight: '600', color: '#991b1b', margin: 0 }}>
                         {workflowData.s92_request.note}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Conditions Drafting Results */}
              {workflowStage === 'conditions_complete' && workflowData.conditions && (
                <div>
                  <button
                    onClick={resetWorkflow}
                    style={{
                      ...styles.button,
                      background: 'linear-gradient(135deg, #64748b 0%, #475569 100%)',
                      marginBottom: '16px',
                      boxShadow: '0 4px 6px -1px rgba(71, 85, 105, 0.3)'
                    }}
                  >
                     Back to Workflow Menu
                  </button>

                  <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>
                    Draft Consent Conditions
                  </h2>
                  
                  <div style={{
                    background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)',
                    padding: '24px',
                    borderRadius: '12px',
                    marginBottom: '24px',
                    border: '2px solid #93c5fd'
                  }}>
                    <h3 style={{ margin: '0 0 8px 0', fontSize: '20px', fontWeight: '700', color: '#1e40af' }}>
                      {workflowData.conditions.activityType}
                    </h3>
                    <p style={{ margin: '0 0 16px 0', fontSize: '14px', color: '#1e40af' }}>
                      <strong>Decision:</strong> {workflowData.conditions.decision}
                    </p>
                    
                    <div style={{ display: 'grid', gap: '12px' }}>
                      {workflowData.conditions.conditions.map((cond) => (
                        <div key={cond.number} style={{
                          background: 'white',
                          padding: '16px',
                          borderRadius: '8px',
                          border: '1px solid #93c5fd'
                        }}>
                          <div style={{ display: 'flex', alignItems: 'start', gap: '12px' }}>
                            <span style={{
                              background: '#1e40af',
                              color: 'white',
                              width: '28px',
                              height: '28px',
                              borderRadius: '50%',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '14px',
                              fontWeight: '700',
                              flexShrink: 0
                            }}>
                              {cond.number}
                            </span>
                            <div style={{ flex: 1 }}>
                              <p style={{ margin: '0 0 6px 0', fontSize: '13px', fontWeight: '700', color: '#1e40af' }}>
                                {cond.category}
                              </p>
                              <p style={{ margin: 0, fontSize: '14px', color: '#475569', lineHeight: '1.5' }}>
                                {cond.condition}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div style={{ 
                      padding: '12px', 
                      background: '#eff6ff',
                      borderRadius: '8px',
                      marginTop: '16px',
                      border: '1px solid #93c5fd'
                    }}>
                      <p style={{ fontSize: '13px', fontWeight: '600', color: '#1e40af', margin: 0 }}>
                         {workflowData.conditions.note}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* s42A Report Results */}
              {workflowStage === 's42a_complete' && workflowData.s42a_report && (
                <div>
                  <button
                    onClick={resetWorkflow}
                    style={{
                      ...styles.button,
                      background: 'linear-gradient(135deg, #64748b 0%, #475569 100%)',
                      marginBottom: '16px',
                      boxShadow: '0 4px 6px -1px rgba(71, 85, 105, 0.3)'
                    }}
                  >
                     Back to Workflow Menu
                  </button>

                  <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>
                    s42A Planner's Report
                  </h2>
                  
                  <div style={{
                    background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
                    padding: '24px',
                    borderRadius: '12px',
                    marginBottom: '24px',
                    border: '2px solid #6ee7b7'
                  }}>
                    <h3 style={{ margin: '0 0 8px 0', fontSize: '20px', fontWeight: '700', color: '#065f46' }}>
                      {workflowData.s42a_report.reportType}
                    </h3>
                    <p style={{ margin: '0 0 16px 0', fontSize: '16px', color: '#065f46' }}>
                      <strong>Recommendation:</strong> {workflowData.s42a_report.recommendation}
                    </p>
                    
                    {workflowData.s42a_report.summaryOfIssues.length > 0 && (
                      <div style={{ marginBottom: '16px' }}>
                        <p style={{ fontSize: '14px', fontWeight: '700', color: '#065f46', marginBottom: '8px' }}>
                          Summary of Issues:
                        </p>
                        <ul style={{ margin: 0, paddingLeft: '20px' }}>
                          {workflowData.s42a_report.summaryOfIssues.map((issue, idx) => (
                            <li key={idx} style={{ fontSize: '14px', color: '#047857', marginBottom: '4px' }}>
                              {issue}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div style={{ marginBottom: '16px' }}>
                      <p style={{ fontSize: '14px', fontWeight: '700', color: '#065f46', marginBottom: '8px' }}>
                        Key Findings:
                      </p>
                      <ul style={{ margin: 0, paddingLeft: '20px' }}>
                        {workflowData.s42a_report.keyFindings.map((finding, idx) => (
                          <li key={idx} style={{ fontSize: '14px', color: '#047857', marginBottom: '4px' }}>
                            {finding}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ marginBottom: '16px' }}>
                      <p style={{ fontSize: '14px', fontWeight: '700', color: '#065f46', marginBottom: '8px' }}>
                        Report Sections:
                      </p>
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '8px' }}>
                        {workflowData.s42a_report.sections.map((section, idx) => (
                          <div key={idx} style={{
                            background: 'white',
                            padding: '8px 12px',
                            borderRadius: '6px',
                            fontSize: '13px',
                            color: '#047857',
                            border: '1px solid #6ee7b7'
                          }}>
                            {idx + 1}. {section}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{ 
                      padding: '12px', 
                      background: '#ecfdf5',
                      borderRadius: '8px',
                      border: '1px solid #6ee7b7'
                    }}>
                      <p style={{ fontSize: '13px', fontWeight: '600', color: '#065f46', margin: 0 }}>
                         {workflowData.s42a_report.timeToGenerate}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveTab('results')}
                    style={styles.button}
                  >
                    View Full Results 
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Results Tab */}
          {activeTab === 'results' && assessmentResults && (
            <div style={{ display: 'grid', gap: '24px' }}>
              {/* Assessment Overview Card */}
              <div style={{
                background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                borderRadius: '16px',
                padding: '28px',
                color: 'white'
              }}>
                <h2 style={{ margin: '0 0 20px 0', fontSize: '28px', fontWeight: '800' }}>
                  Assessment Overview
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                  <div>
                    <p style={{ fontSize: '14px', opacity: 0.8, marginBottom: '6px', fontWeight: '600' }}>Zone</p>
                    <p style={{ fontSize: '22px', fontWeight: '800', margin: 0 }}>
                      {assessmentResults.zone}
                    </p>
                  </div>
                  <div>
                    <p style={{ fontSize: '14px', opacity: 0.8, marginBottom: '6px', fontWeight: '600' }}>Activity Type</p>
                    <p style={{ fontSize: '22px', fontWeight: '800', margin: 0 }}>
                      {formData.activity ? formData.activity.charAt(0).toUpperCase() + formData.activity.slice(1).replace('-', ' ') : 'Not specified'}
                    </p>
                  </div>
                  {workflowData.activity_status && (
                    <div>
                      <p style={{ fontSize: '14px', opacity: 0.8, marginBottom: '6px', fontWeight: '600' }}>Activity Status</p>
                      <div style={{
                        ...styles.statusBadge(workflowData.activity_status.status),
                        display: 'inline-block',
                        marginTop: '6px'
                      }}>
                        {workflowData.activity_status.status}
                      </div>
                    </div>
                  )}
                  <div>
                    <p style={{ fontSize: '14px', opacity: 0.8, marginBottom: '6px', fontWeight: '600' }}>Issues Found</p>
                    <p style={{ 
                      fontSize: '32px', 
                      fontWeight: '800', 
                      margin: 0,
                      color: assessmentResults.issues.length > 0 ? '#fca5a5' : '#86efac'
                    }}>
                      {assessmentResults.issues.length}
                    </p>
                  </div>
                </div>
              </div>

              {/* Workflow Progress Card */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '28px',
                border: '2px solid #e5e7eb',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <h3 style={{ margin: 0, fontSize: '22px', fontWeight: '700', color: '#1e293b' }}>
                    Workflow Progress
                  </h3>
                  <div style={{ fontSize: '28px', fontWeight: '800', color: '#2563eb' }}>
                    {[
                      workflowData.s88_result,
                      workflowData.activity_status,
                      workflowData.compliance_matrix,
                      workflowData.notification_decision,
                      workflowData.s92_request,
                      workflowData.conditions,
                      workflowData.s42a_report
                    ].filter(Boolean).length}/7
                  </div>
                </div>

                <div style={{ display: 'grid', gap: '12px' }}>
                  {/* s88 Completeness */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    background: workflowData.s88_result ? '#dcfce7' : '#f1f5f9',
                    borderRadius: '10px',
                    border: workflowData.s88_result ? '2px solid #86efac' : '2px solid #cbd5e1'
                  }}>
                    {workflowData.s88_result ? (
                      <CheckCircle size={24} color="#166534" style={{ flexShrink: 0 }} />
                    ) : (
                      <div style={{ 
                        width: '24px', 
                        height: '24px', 
                        borderRadius: '50%', 
                        border: '2px solid #cbd5e1',
                        flexShrink: 0
                      }}></div>
                    )}
                    <span style={{ 
                      fontSize: '15px', 
                      fontWeight: '600',
                      color: workflowData.s88_result ? '#166534' : '#64748b'
                    }}>
                      s88 Completeness Check
                    </span>
                  </div>

                  {/* Activity Status */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    background: workflowData.activity_status ? '#dcfce7' : '#f1f5f9',
                    borderRadius: '10px',
                    border: workflowData.activity_status ? '2px solid #86efac' : '2px solid #cbd5e1'
                  }}>
                    {workflowData.activity_status ? (
                      <CheckCircle size={24} color="#166534" style={{ flexShrink: 0 }} />
                    ) : (
                      <div style={{ 
                        width: '24px', 
                        height: '24px', 
                        borderRadius: '50%', 
                        border: '2px solid #cbd5e1',
                        flexShrink: 0
                      }}></div>
                    )}
                    <span style={{ 
                      fontSize: '15px', 
                      fontWeight: '600',
                      color: workflowData.activity_status ? '#166534' : '#64748b'
                    }}>
                      Activity Status Determination
                    </span>
                  </div>

                  {/* Compliance Matrix */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    background: workflowData.compliance_matrix ? '#dcfce7' : '#f1f5f9',
                    borderRadius: '10px',
                    border: workflowData.compliance_matrix ? '2px solid #86efac' : '2px solid #cbd5e1'
                  }}>
                    {workflowData.compliance_matrix ? (
                      <CheckCircle size={24} color="#166534" style={{ flexShrink: 0 }} />
                    ) : (
                      <div style={{ 
                        width: '24px', 
                        height: '24px', 
                        borderRadius: '50%', 
                        border: '2px solid #cbd5e1',
                        flexShrink: 0
                      }}></div>
                    )}
                    <span style={{ 
                      fontSize: '15px', 
                      fontWeight: '600',
                      color: workflowData.compliance_matrix ? '#166534' : '#64748b'
                    }}>
                      Compliance Matrix Assessment
                    </span>
                  </div>

                  {/* Notification Assessment */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    background: workflowData.notification_decision ? '#dcfce7' : '#f1f5f9',
                    borderRadius: '10px',
                    border: workflowData.notification_decision ? '2px solid #86efac' : '2px solid #cbd5e1'
                  }}>
                    {workflowData.notification_decision ? (
                      <CheckCircle size={24} color="#166534" style={{ flexShrink: 0 }} />
                    ) : (
                      <div style={{ 
                        width: '24px', 
                        height: '24px', 
                        borderRadius: '50%', 
                        border: '2px solid #cbd5e1',
                        flexShrink: 0
                      }}></div>
                    )}
                    <span style={{ 
                      fontSize: '15px', 
                      fontWeight: '600',
                      color: workflowData.notification_decision ? '#166534' : '#64748b'
                    }}>
                      Notification Assessment
                    </span>
                  </div>

                  {/* s92 Request */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    background: workflowData.s92_request ? '#dcfce7' : '#f1f5f9',
                    borderRadius: '10px',
                    border: workflowData.s92_request ? '2px solid #86efac' : '2px solid #cbd5e1'
                  }}>
                    {workflowData.s92_request ? (
                      <CheckCircle size={24} color="#166534" style={{ flexShrink: 0 }} />
                    ) : (
                      <div style={{ 
                        width: '24px', 
                        height: '24px', 
                        borderRadius: '50%', 
                        border: '2px solid #cbd5e1',
                        flexShrink: 0
                      }}></div>
                    )}
                    <span style={{ 
                      fontSize: '15px', 
                      fontWeight: '600',
                      color: workflowData.s92_request ? '#166534' : '#64748b'
                    }}>
                      s92 Request Generation
                    </span>
                  </div>

                  {/* Conditions Drafting */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    background: workflowData.conditions ? '#dcfce7' : '#f1f5f9',
                    borderRadius: '10px',
                    border: workflowData.conditions ? '2px solid #86efac' : '2px solid #cbd5e1'
                  }}>
                    {workflowData.conditions ? (
                      <CheckCircle size={24} color="#166534" style={{ flexShrink: 0 }} />
                    ) : (
                      <div style={{ 
                        width: '24px', 
                        height: '24px', 
                        borderRadius: '50%', 
                        border: '2px solid #cbd5e1',
                        flexShrink: 0
                      }}></div>
                    )}
                    <span style={{ 
                      fontSize: '15px', 
                      fontWeight: '600',
                      color: workflowData.conditions ? '#166534' : '#64748b'
                    }}>
                      Consent Conditions Drafted
                    </span>
                  </div>

                  {/* s42A Report */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 16px',
                    background: workflowData.s42a_report ? '#dcfce7' : '#f1f5f9',
                    borderRadius: '10px',
                    border: workflowData.s42a_report ? '2px solid #86efac' : '2px solid #cbd5e1'
                  }}>
                    {workflowData.s42a_report ? (
                      <CheckCircle size={24} color="#166534" style={{ flexShrink: 0 }} />
                    ) : (
                      <div style={{ 
                        width: '24px', 
                        height: '24px', 
                        borderRadius: '50%', 
                        border: '2px solid #cbd5e1',
                        flexShrink: 0
                      }}></div>
                    )}
                    <span style={{ 
                      fontSize: '15px', 
                      fontWeight: '600',
                      color: workflowData.s42a_report ? '#166534' : '#64748b'
                    }}>
                      s42A Report Generated
                    </span>
                  </div>
                </div>
              </div>

              {/* Recommendation Panel */}
              {(workflowData.activity_status || workflowData.s42a_report) && (
                <div style={{
                  background: workflowData.s42a_report?.recommendation === 'Grant'
                    ? 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)'
                    : workflowData.s42a_report?.recommendation === 'Decline'
                    ? 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)'
                    : 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                  borderRadius: '16px',
                  padding: '28px',
                  border: workflowData.s42a_report?.recommendation === 'Grant'
                    ? '2px solid #6ee7b7'
                    : workflowData.s42a_report?.recommendation === 'Decline'
                    ? '2px solid #fca5a5'
                    : '2px solid #fcd34d',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'start', gap: '20px' }}>
                    {/* Icon */}
                    <div style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '16px',
                      background: workflowData.s42a_report?.recommendation === 'Grant'
                        ? '#10b981'
                        : workflowData.s42a_report?.recommendation === 'Decline'
                        ? '#ef4444'
                        : '#f59e0b',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      {workflowData.s42a_report?.recommendation === 'Grant' ? (
                        <CheckCircle size={40} color="white" />
                      ) : workflowData.s42a_report?.recommendation === 'Decline' ? (
                        <X size={40} color="white" />
                      ) : (
                        <AlertCircle size={40} color="white" />
                      )}
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1 }}>
                      <h3 style={{ 
                        margin: '0 0 12px 0', 
                        fontSize: '24px', 
                        fontWeight: '800',
                        color: workflowData.s42a_report?.recommendation === 'Grant'
                          ? '#065f46'
                          : workflowData.s42a_report?.recommendation === 'Decline'
                          ? '#991b1b'
                          : '#92400e'
                      }}>
                        {workflowData.s42a_report?.recommendation 
                          ? `Recommendation: ${workflowData.s42a_report.recommendation}`
                          : 'Assessment In Progress'
                        }
                      </h3>

                      {/* Status Badge */}
                      {workflowData.activity_status && (
                        <div style={{ marginBottom: '16px' }}>
                          <div style={{
                            ...styles.statusBadge(workflowData.activity_status.status),
                            display: 'inline-block',
                            fontSize: '14px',
                            padding: '6px 14px'
                          }}>
                            Activity Status: {workflowData.activity_status.status}
                          </div>
                        </div>
                      )}

                      {/* Key Findings */}
                      {workflowData.s42a_report?.keyFindings && (
                        <div style={{ marginBottom: '16px' }}>
                          <h4 style={{ 
                            margin: '0 0 10px 0', 
                            fontSize: '16px', 
                            fontWeight: '700',
                            color: workflowData.s42a_report.recommendation === 'Grant' ? '#047857' : '#7f1d1d'
                          }}>
                            Key Findings:
                          </h4>
                          <ul style={{ margin: 0, paddingLeft: '20px' }}>
                            {workflowData.s42a_report.keyFindings.map((finding, idx) => (
                              <li key={idx} style={{ 
                                fontSize: '15px', 
                                color: workflowData.s42a_report.recommendation === 'Grant' ? '#047857' : '#7f1d1d',
                                marginBottom: '8px',
                                lineHeight: '1.5'
                              }}>
                                {finding}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Notification Decision */}
                      {workflowData.notification_decision && (
                        <div style={{
                          background: workflowData.s42a_report?.recommendation === 'Grant' ? '#ecfdf5' : '#fef2f2',
                          padding: '12px 16px',
                          borderRadius: '8px',
                          border: workflowData.s42a_report?.recommendation === 'Grant' 
                            ? '1px solid #6ee7b7' 
                            : '1px solid #fca5a5',
                          marginBottom: '16px'
                        }}>
                          <p style={{ 
                            margin: 0, 
                            fontSize: '14px', 
                            fontWeight: '600',
                            color: workflowData.s42a_report?.recommendation === 'Grant' ? '#065f46' : '#991b1b'
                          }}>
                             Notification: <strong>{workflowData.notification_decision.type}</strong>
                            {workflowData.notification_decision.process?.timeframe && (
                              <>  {workflowData.notification_decision.process.timeframe}</>
                            )}
                          </p>
                        </div>
                      )}

                      {/* Conditions Preview */}
                      {workflowData.conditions && (
                        <div style={{
                          background: '#eff6ff',
                          padding: '12px 16px',
                          borderRadius: '8px',
                          border: '1px solid #93c5fd',
                          marginBottom: '16px'
                        }}>
                          <p style={{ 
                            margin: 0, 
                            fontSize: '14px', 
                            fontWeight: '600',
                            color: '#1e40af'
                          }}>
                             {workflowData.conditions.conditions.length} consent conditions drafted
                          </p>
                        </div>
                      )}

                      {/* Summary Text */}
                      <p style={{ 
                        margin: 0, 
                        fontSize: '15px',
                        lineHeight: '1.6',
                        color: workflowData.s42a_report?.recommendation === 'Grant'
                          ? '#047857'
                          : workflowData.s42a_report?.recommendation === 'Decline'
                          ? '#7f1d1d'
                          : '#92400e'
                      }}>
                        {workflowData.s42a_report?.recommendation === 'Grant' && (
                          <>
                            Based on the assessment of {assessmentResults.issues.length} compliance issue{assessmentResults.issues.length !== 1 ? 's' : ''}, 
                            the application is recommended for <strong>grant of consent</strong>. 
                            {workflowData.conditions && ` Conditions will address matters of control and ensure compatibility with the zone.`}
                          </>
                        )}
                        {workflowData.s42a_report?.recommendation === 'Decline' && (
                          <>
                            Based on {assessmentResults.issues.length} significant compliance issue{assessmentResults.issues.length !== 1 ? 's' : ''}, 
                            the application is recommended for <strong>decline</strong>. 
                            The proposal does not adequately address district plan requirements and effects on the environment cannot be appropriately mitigated.
                          </>
                        )}
                        {!workflowData.s42a_report && workflowData.activity_status && (
                          <>
                            Application classified as <strong>{workflowData.activity_status.status}</strong>. 
                            {assessmentResults.issues.length > 0 
                              ? ` ${assessmentResults.issues.length} compliance issue${assessmentResults.issues.length !== 1 ? 's' : ''} identified requiring assessment.`
                              : ' Proposal meets district plan standards.'
                            }
                            {' '}Complete workflow assessments to generate final recommendation.
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Issues List Card */}
              {assessmentResults.issues.length > 0 && (
                <div style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '28px',
                  border: '2px solid #e5e7eb',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h3 style={{ margin: 0, fontSize: '22px', fontWeight: '700', color: '#1e293b' }}>
                      Compliance Issues
                    </h3>
                    <div style={{
                      padding: '6px 16px',
                      background: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)',
                      borderRadius: '20px',
                      border: '2px solid #fca5a5',
                      fontSize: '14px',
                      fontWeight: '700',
                      color: '#991b1b'
                    }}>
                      {assessmentResults.issues.length} Issue{assessmentResults.issues.length !== 1 ? 's' : ''}
                    </div>
                  </div>

                  <div style={{ display: 'grid', gap: '16px' }}>
                    {assessmentResults.issues.map((issue, idx) => (
                      <div
                        key={idx}
                        style={{
                          background: issue.severity === 'critical' 
                            ? 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)'
                            : 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                          padding: '20px',
                          borderRadius: '12px',
                          border: issue.severity === 'critical' ? '2px solid #fca5a5' : '2px solid #fcd34d',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                        onClick={() => {
                          setActiveTab('rules');
                          // Find and expand the relevant zone
                          const ruleCode = issue.ruleReference;
                          const zoneId = ruleCode.split('-')[0];
                          setExpandedZones({ [zoneId]: true });
                          setExpandedRules({ [ruleCode]: true });
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'start', gap: '16px' }}>
                          {/* Severity Icon */}
                          <div style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '12px',
                            background: issue.severity === 'critical' ? '#991b1b' : '#92400e',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}>
                            <AlertTriangle size={28} color="white" />
                          </div>

                          {/* Issue Content */}
                          <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px', flexWrap: 'wrap' }}>
                              {/* Rule Code Badge */}
                              <span style={{
                                padding: '4px 12px',
                                background: issue.severity === 'critical' ? '#991b1b' : '#92400e',
                                color: 'white',
                                borderRadius: '6px',
                                fontSize: '12px',
                                fontWeight: '700'
                              }}>
                                {issue.ruleReference}
                              </span>

                              {/* Severity Badge */}
                              <span style={{
                                padding: '4px 12px',
                                background: issue.severity === 'critical' ? '#7f1d1d' : '#78350f',
                                color: 'white',
                                borderRadius: '6px',
                                fontSize: '12px',
                                fontWeight: '700',
                                textTransform: 'uppercase'
                              }}>
                                {issue.severity}
                              </span>
                            </div>

                            {/* Issue Title */}
                            <h4 style={{ 
                              margin: '0 0 8px 0', 
                              fontSize: '18px', 
                              fontWeight: '700',
                              color: issue.severity === 'critical' ? '#991b1b' : '#92400e'
                            }}>
                              {issue.title}
                            </h4>

                            {/* Issue Description */}
                            <p style={{ 
                              margin: '0 0 12px 0', 
                              fontSize: '15px',
                              color: issue.severity === 'critical' ? '#7f1d1d' : '#78350f',
                              lineHeight: '1.5'
                            }}>
                              {issue.description}
                            </p>

                            {/* Click to View Hint */}
                            <div style={{ 
                              display: 'flex', 
                              alignItems: 'center', 
                              gap: '6px',
                              fontSize: '13px',
                              fontWeight: '600',
                              color: issue.severity === 'critical' ? '#991b1b' : '#92400e'
                            }}>
                              <span>Click to view rule details in Rules tab</span>
                              <ChevronDown 
                                size={16} 
                                style={{ 
                                  transform: 'rotate(-90deg)',
                                  color: issue.severity === 'critical' ? '#991b1b' : '#92400e'
                                }} 
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Timeline/History View Card */}
              {[
                workflowData.s88_result,
                workflowData.activity_status,
                workflowData.compliance_matrix,
                workflowData.notification_decision,
                workflowData.s92_request,
                workflowData.conditions,
                workflowData.s42a_report
              ].filter(Boolean).length > 0 && (
                <div style={{
                  background: 'white',
                  borderRadius: '16px',
                  padding: '28px',
                  border: '2px solid #e5e7eb',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  <h3 style={{ margin: '0 0 24px 0', fontSize: '22px', fontWeight: '700', color: '#1e293b' }}>
                    Workflow Timeline
                  </h3>

                  <div style={{ position: 'relative', paddingLeft: '40px' }}>
                    {/* Timeline Line */}
                    <div style={{
                      position: 'absolute',
                      left: '15px',
                      top: '0',
                      bottom: '0',
                      width: '2px',
                      background: 'linear-gradient(to bottom, #2563eb 0%, #93c5fd 100%)'
                    }}></div>

                    {/* Timeline Items */}
                    <div style={{ display: 'grid', gap: '24px' }}>
                      {/* s88 Completeness */}
                      {workflowData.s88_result && (
                        <div style={{ position: 'relative' }}>
                          {/* Timeline Dot */}
                          <div style={{
                            position: 'absolute',
                            left: '-33px',
                            top: '4px',
                            width: '16px',
                            height: '16px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                            border: '3px solid white',
                            boxShadow: '0 0 0 2px #10b981'
                          }}></div>

                          <div style={{
                            background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                            padding: '16px 20px',
                            borderRadius: '12px',
                            border: '2px solid #86efac'
                          }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
                              <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '700', color: '#166534' }}>
                                s88 Completeness Check
                              </h4>
                              <div style={{ textAlign: 'right' }}>
                                <div style={{ 
                                  fontSize: '13px', 
                                  color: '#047857',
                                  fontWeight: '700',
                                  marginBottom: '2px'
                                }}>
                                  {formatTimestamp(workflowData.s88_result.timestamp)}
                                </div>
                                <div style={{ 
                                  fontSize: '11px', 
                                  color: '#047857',
                                  fontWeight: '600',
                                  padding: '2px 8px',
                                  background: '#bbf7d0',
                                  borderRadius: '6px',
                                  display: 'inline-block'
                                }}>
                                  {workflowData.s88_result.duration}
                                </div>
                              </div>
                            </div>
                            <p style={{ margin: 0, fontSize: '14px', color: '#047857' }}>
                              Status: <strong>{workflowData.s88_result.status.toUpperCase()}</strong>
                              {workflowData.s88_result.missingItems.length > 0 && 
                                `  ${workflowData.s88_result.missingItems.length} items missing`
                              }
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Activity Status */}
                      {workflowData.activity_status && (
                        <div style={{ position: 'relative' }}>
                          <div style={{
                            position: 'absolute',
                            left: '-33px',
                            top: '4px',
                            width: '16px',
                            height: '16px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                            border: '3px solid white',
                            boxShadow: '0 0 0 2px #3b82f6'
                          }}></div>

                          <div style={{
                            background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                            padding: '16px 20px',
                            borderRadius: '12px',
                            border: '2px solid #93c5fd'
                          }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
                              <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '700', color: '#1e40af' }}>
                                Activity Status Determination
                              </h4>
                              <div style={{ textAlign: 'right' }}>
                                <div style={{ 
                                  fontSize: '13px', 
                                  color: '#1e40af',
                                  fontWeight: '700',
                                  marginBottom: '2px'
                                }}>
                                  {formatTimestamp(workflowData.activity_status.timestamp)}
                                </div>
                                <div style={{ 
                                  fontSize: '11px', 
                                  color: '#1e40af',
                                  fontWeight: '600',
                                  padding: '2px 8px',
                                  background: '#bfdbfe',
                                  borderRadius: '6px',
                                  display: 'inline-block'
                                }}>
                                  {workflowData.activity_status.duration}
                                </div>
                              </div>
                            </div>
                            <p style={{ margin: 0, fontSize: '14px', color: '#1e40af' }}>
                              Determined as: <strong>{workflowData.activity_status.status}</strong>
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Compliance Matrix */}
                      {workflowData.compliance_matrix && (
                        <div style={{ position: 'relative' }}>
                          <div style={{
                            position: 'absolute',
                            left: '-33px',
                            top: '4px',
                            width: '16px',
                            height: '16px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                            border: '3px solid white',
                            boxShadow: '0 0 0 2px #f59e0b'
                          }}></div>

                          <div style={{
                            background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
                            padding: '16px 20px',
                            borderRadius: '12px',
                            border: '2px solid #fcd34d'
                          }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
                              <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '700', color: '#92400e' }}>
                                Compliance Matrix Assessment
                              </h4>
                              <div style={{ textAlign: 'right' }}>
                                <div style={{ 
                                  fontSize: '13px', 
                                  color: '#92400e',
                                  fontWeight: '700',
                                  marginBottom: '2px'
                                }}>
                                  {formatTimestamp(workflowData.compliance_matrix.timestamp)}
                                </div>
                                <div style={{ 
                                  fontSize: '11px', 
                                  color: '#92400e',
                                  fontWeight: '600',
                                  padding: '2px 8px',
                                  background: '#fde68a',
                                  borderRadius: '6px',
                                  display: 'inline-block'
                                }}>
                                  {workflowData.compliance_matrix.duration}
                                </div>
                              </div>
                            </div>
                            <p style={{ margin: 0, fontSize: '14px', color: '#92400e' }}>
                              Found: <strong>{workflowData.compliance_matrix.non_compliant.length} non-compliances</strong>
                              {workflowData.compliance_matrix.critical_issues.length > 0 && 
                                `  ${workflowData.compliance_matrix.critical_issues.length} critical`
                              }
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Notification Assessment */}
                      {workflowData.notification_decision && (
                        <div style={{ position: 'relative' }}>
                          <div style={{
                            position: 'absolute',
                            left: '-33px',
                            top: '4px',
                            width: '16px',
                            height: '16px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                            border: '3px solid white',
                            boxShadow: '0 0 0 2px #8b5cf6'
                          }}></div>

                          <div style={{
                            background: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)',
                            padding: '16px 20px',
                            borderRadius: '12px',
                            border: '2px solid #d8b4fe'
                          }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
                              <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '700', color: '#6b21a8' }}>
                                Notification Assessment
                              </h4>
                              <div style={{ textAlign: 'right' }}>
                                <div style={{ 
                                  fontSize: '13px', 
                                  color: '#6b21a8',
                                  fontWeight: '700',
                                  marginBottom: '2px'
                                }}>
                                  {formatTimestamp(workflowData.notification_decision.timestamp)}
                                </div>
                                <div style={{ 
                                  fontSize: '11px', 
                                  color: '#6b21a8',
                                  fontWeight: '600',
                                  padding: '2px 8px',
                                  background: '#e9d5ff',
                                  borderRadius: '6px',
                                  display: 'inline-block'
                                }}>
                                  {workflowData.notification_decision.duration}
                                </div>
                              </div>
                            </div>
                            <p style={{ margin: 0, fontSize: '14px', color: '#6b21a8' }}>
                              Decision: <strong>{workflowData.notification_decision.type}</strong> ({workflowData.notification_decision.statutory})
                            </p>
                          </div>
                        </div>
                      )}

                      {/* s92 Request */}
                      {workflowData.s92_request && (
                        <div style={{ position: 'relative' }}>
                          <div style={{
                            position: 'absolute',
                            left: '-33px',
                            top: '4px',
                            width: '16px',
                            height: '16px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                            border: '3px solid white',
                            boxShadow: '0 0 0 2px #ef4444'
                          }}></div>

                          <div style={{
                            background: 'linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)',
                            padding: '16px 20px',
                            borderRadius: '12px',
                            border: '2px solid #fca5a5'
                          }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
                              <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '700', color: '#991b1b' }}>
                                s92 Request Generated
                              </h4>
                              <div style={{ textAlign: 'right' }}>
                                <div style={{ 
                                  fontSize: '13px', 
                                  color: '#991b1b',
                                  fontWeight: '700',
                                  marginBottom: '2px'
                                }}>
                                  {formatTimestamp(workflowData.s92_request.timestamp)}
                                </div>
                                <div style={{ 
                                  fontSize: '11px', 
                                  color: '#991b1b',
                                  fontWeight: '600',
                                  padding: '2px 8px',
                                  background: '#fecaca',
                                  borderRadius: '6px',
                                  display: 'inline-block'
                                }}>
                                  {workflowData.s92_request.duration}
                                </div>
                              </div>
                            </div>
                            <p style={{ margin: 0, fontSize: '14px', color: '#991b1b' }}>
                              Requesting: <strong>{workflowData.s92_request.missingItems.length} additional items</strong>
                            </p>
                          </div>
                        </div>
                      )}

                      {/* Conditions Drafting */}
                      {workflowData.conditions && (
                        <div style={{ position: 'relative' }}>
                          <div style={{
                            position: 'absolute',
                            left: '-33px',
                            top: '4px',
                            width: '16px',
                            height: '16px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
                            border: '3px solid white',
                            boxShadow: '0 0 0 2px #06b6d4'
                          }}></div>

                          <div style={{
                            background: 'linear-gradient(135deg, #ecfeff 0%, #cffafe 100%)',
                            padding: '16px 20px',
                            borderRadius: '12px',
                            border: '2px solid #67e8f9'
                          }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
                              <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '700', color: '#0e7490' }}>
                                Consent Conditions Drafted
                              </h4>
                              <div style={{ textAlign: 'right' }}>
                                <div style={{ 
                                  fontSize: '13px', 
                                  color: '#0e7490',
                                  fontWeight: '700',
                                  marginBottom: '2px'
                                }}>
                                  {formatTimestamp(workflowData.conditions.timestamp)}
                                </div>
                                <div style={{ 
                                  fontSize: '11px', 
                                  color: '#0e7490',
                                  fontWeight: '600',
                                  padding: '2px 8px',
                                  background: '#a5f3fc',
                                  borderRadius: '6px',
                                  display: 'inline-block'
                                }}>
                                  {workflowData.conditions.duration}
                                </div>
                              </div>
                            </div>
                            <p style={{ margin: 0, fontSize: '14px', color: '#0e7490' }}>
                              Generated: <strong>{workflowData.conditions.conditions.length} conditions</strong>
                            </p>
                          </div>
                        </div>
                      )}

                      {/* s42A Report */}
                      {workflowData.s42a_report && (
                        <div style={{ position: 'relative' }}>
                          <div style={{
                            position: 'absolute',
                            left: '-33px',
                            top: '4px',
                            width: '16px',
                            height: '16px',
                            borderRadius: '50%',
                            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                            border: '3px solid white',
                            boxShadow: '0 0 0 2px #10b981'
                          }}></div>

                          <div style={{
                            background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
                            padding: '16px 20px',
                            borderRadius: '12px',
                            border: '2px solid #6ee7b7'
                          }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
                              <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '700', color: '#065f46' }}>
                                s42A Report Generated
                              </h4>
                              <div style={{ textAlign: 'right' }}>
                                <div style={{ 
                                  fontSize: '13px', 
                                  color: '#065f46',
                                  fontWeight: '700',
                                  marginBottom: '2px'
                                }}>
                                  {formatTimestamp(workflowData.s42a_report.timestamp)}
                                </div>
                                <div style={{ 
                                  fontSize: '11px', 
                                  color: '#065f46',
                                  fontWeight: '600',
                                  padding: '2px 8px',
                                  background: '#bbf7d0',
                                  borderRadius: '6px',
                                  display: 'inline-block'
                                }}>
                                  {workflowData.s42a_report.duration}
                                </div>
                              </div>
                            </div>
                            <p style={{ margin: 0, fontSize: '14px', color: '#065f46' }}>
                              Recommendation: <strong>{workflowData.s42a_report.recommendation}</strong>  {workflowData.s42a_report.sections.length} sections
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* No Issues Message */}
              {assessmentResults.issues.length === 0 && (
                <div style={{
                  background: 'linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)',
                  borderRadius: '16px',
                  padding: '32px',
                  border: '2px solid #86efac',
                  textAlign: 'center'
                }}>
                  <CheckCircle size={64} color="#166534" style={{ margin: '0 auto 16px' }} />
                  <h3 style={{ margin: '0 0 8px 0', fontSize: '24px', fontWeight: '700', color: '#166534' }}>
                    Fully Compliant
                  </h3>
                  <p style={{ margin: 0, fontSize: '16px', color: '#047857' }}>
                    No compliance issues found. This proposal meets all district plan standards.
                  </p>
                </div>
              )}

              {/* Action Buttons Section */}
              <div style={{
                background: 'white',
                borderRadius: '16px',
                padding: '28px',
                border: '2px solid #e5e7eb',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}>
                <h3 style={{ margin: '0 0 20px 0', fontSize: '22px', fontWeight: '700', color: '#1e293b' }}>
                  Next Actions
                </h3>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
                  {/* Generate s42A Report Button */}
                  <button
                    onClick={() => {
                      if (!workflowData.s42a_report) {
                        setActiveTab('workflow');
                        runS42AReport();
                      }
                    }}
                    disabled={!workflowData.activity_status}
                    style={{
                      ...styles.button,
                      background: workflowData.s42a_report 
                        ? 'linear-gradient(135deg, #86efac 0%, #6ee7b7 100%)'
                        : 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                      opacity: !workflowData.activity_status ? 0.5 : 1,
                      cursor: !workflowData.activity_status ? 'not-allowed' : 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '20px',
                      height: 'auto'
                    }}
                  >
                    <FileText size={32} />
                    <span style={{ fontSize: '16px', fontWeight: '700' }}>
                      {workflowData.s42a_report ? ' Report Generated' : 'Generate s42A Report'}
                    </span>
                    <span style={{ fontSize: '13px', opacity: 0.9, fontWeight: '400' }}>
                      {workflowData.s42a_report 
                        ? 'View in Workflow tab'
                        : 'Create planner\'s recommendation report'
                      }
                    </span>
                  </button>

                  {/* Export to PDF Button */}
                  <button
                    onClick={() => {
                      alert('PDF export would generate a comprehensive assessment report with all workflow results, compliance matrix, and supporting documentation.');
                    }}
                    style={{
                      ...styles.button,
                      background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '20px',
                      height: 'auto'
                    }}
                  >
                    <Upload size={32} style={{ transform: 'rotate(180deg)' }} />
                    <span style={{ fontSize: '16px', fontWeight: '700' }}>
                      Export to PDF
                    </span>
                    <span style={{ fontSize: '13px', opacity: 0.9, fontWeight: '400' }}>
                      Download complete assessment
                    </span>
                  </button>

                  {/* Email Summary Button */}
                  <button
                    onClick={() => {
                      alert('Email summary would send assessment results to specified recipients with attached reports and next steps.');
                    }}
                    style={{
                      ...styles.button,
                      background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '20px',
                      height: 'auto'
                    }}
                  >
                    <AlertCircle size={32} />
                    <span style={{ fontSize: '16px', fontWeight: '700' }}>
                      Email Summary
                    </span>
                    <span style={{ fontSize: '13px', opacity: 0.9, fontWeight: '400' }}>
                      Send results to stakeholders
                    </span>
                  </button>

                  {/* Generate Conditions Button */}
                  {workflowData.activity_status?.status === 'Controlled' && (
                    <button
                      onClick={() => {
                        if (!workflowData.conditions) {
                          setActiveTab('workflow');
                          runConditionsDrafting();
                        }
                      }}
                      style={{
                        ...styles.button,
                        background: workflowData.conditions
                          ? 'linear-gradient(135deg, #a5f3fc 0%, #67e8f9 100%)'
                          : 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '20px',
                        height: 'auto'
                      }}
                    >
                      <CheckCircle size={32} />
                      <span style={{ fontSize: '16px', fontWeight: '700' }}>
                        {workflowData.conditions ? ' Conditions Drafted' : 'Draft Conditions'}
                      </span>
                      <span style={{ fontSize: '13px', opacity: 0.9, fontWeight: '400', color: workflowData.conditions ? '#164e63' : 'white' }}>
                        {workflowData.conditions
                          ? 'View in Workflow tab'
                          : 'Generate consent conditions'
                        }
                      </span>
                    </button>
                  )}

                  {/* s92 Request Button - only if incomplete */}
                  {workflowData.s88_result?.status === 'incomplete' && (
                    <button
                      onClick={() => {
                        if (!workflowData.s92_request) {
                          setActiveTab('workflow');
                          runS92Request();
                        }
                      }}
                      style={{
                        ...styles.button,
                        background: workflowData.s92_request
                          ? 'linear-gradient(135deg, #fecaca 0%, #fca5a5 100%)'
                          : 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '20px',
                        height: 'auto'
                      }}
                    >
                      <X size={32} />
                      <span style={{ fontSize: '16px', fontWeight: '700' }}>
                        {workflowData.s92_request ? ' s92 Request Sent' : 'Generate s92 Request'}
                      </span>
                      <span style={{ fontSize: '13px', opacity: 0.9, fontWeight: '400', color: workflowData.s92_request ? '#7f1d1d' : 'white' }}>
                        {workflowData.s92_request
                          ? 'View in Workflow tab'
                          : 'Request further information'
                        }
                      </span>
                    </button>
                  )}

                  {/* Back to Workflow Button */}
                  <button
                    onClick={() => {
                      setActiveTab('workflow');
                      resetWorkflow();
                    }}
                    style={{
                      ...styles.button,
                      background: 'linear-gradient(135deg, #64748b 0%, #475569 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '20px',
                      height: 'auto'
                    }}
                  >
                    <ChevronDown size={32} style={{ transform: 'rotate(90deg)' }} />
                    <span style={{ fontSize: '16px', fontWeight: '700' }}>
                      Run More Workflows
                    </span>
                    <span style={{ fontSize: '13px', opacity: 0.9, fontWeight: '400' }}>
                      Return to workflow menu
                    </span>
                  </button>
                </div>

                {/* Status Messages */}
                {!workflowData.activity_status && (
                  <div style={{
                    marginTop: '16px',
                    padding: '12px 16px',
                    background: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
                    borderRadius: '8px',
                    border: '2px solid #fcd34d',
                    fontSize: '14px',
                    color: '#92400e',
                    fontWeight: '600'
                  }}>
                     Run Activity Status workflow first to enable report generation
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'results' && (
            <div style={{ padding: '32px' }}>
              <h2 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '24px' }}>
                Assessment Results
              </h2>

              {/* 1. Review Summary Section */}
              <div style={{ marginBottom: '32px', padding: '24px', background: 'white', borderRadius: '12px', border: '2px solid #e2e8f0' }}>
                <div 
                  onClick={() => setExpandedSections(prev => ({ ...prev, reviewSummary: !prev.reviewSummary }))}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    marginBottom: expandedSections.reviewSummary ? '20px' : '0'
                  }}
                >
                  <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1e293b', margin: 0 }}>
                    1. REVIEW SUMMARY
                  </h3>
                  {expandedSections.reviewSummary ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>

                {expandedSections.reviewSummary && (
                  renderStaticSection(STATIC_ASSESSMENT_DATA[0])
                )}
              </div>

              {/* 2. Pre-Application Check Section */}
              <div style={{ marginBottom: '32px', padding: '24px', background: 'white', borderRadius: '12px', border: '2px solid #e2e8f0' }}>
                <div 
                  onClick={() => setExpandedSections(prev => ({ ...prev, preApplication: !prev.preApplication }))}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    marginBottom: expandedSections.preApplication ? '20px' : '0'
                  }}
                >
                  <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1e293b', margin: 0 }}>
                    2. PRE-APPLICATION CHECK
                  </h3>
                  {expandedSections.preApplication ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>

                {expandedSections.preApplication && (
                  renderStaticSection(STATIC_ASSESSMENT_DATA[1])
                )}
              </div>

              {/* 3. Section 88 Check Section */}
              <div style={{ marginBottom: '32px', padding: '24px', background: 'white', borderRadius: '12px', border: '2px solid #e2e8f0' }}>
                <div 
                  onClick={() => setExpandedSections(prev => ({ ...prev, section88: !prev.section88 }))}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    marginBottom: expandedSections.section88 ? '20px' : '0'
                  }}
                >
                  <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1e293b', margin: 0 }}>
                    3. SECTION 88 CHECK
                  </h3>
                  {expandedSections.section88 ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>

                {expandedSections.section88 && (
                  renderStaticSection(STATIC_ASSESSMENT_DATA[2])
                )}
              </div>

              {/* 4. General Scoping Review Section */}
              <div style={{ marginBottom: '32px', padding: '24px', background: 'white', borderRadius: '12px', border: '2px solid #e2e8f0' }}>
                <div 
                  onClick={() => setExpandedSections(prev => ({ ...prev, scopingReview: !prev.scopingReview }))}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    marginBottom: expandedSections.scopingReview ? '20px' : '0'
                  }}
                >
                  <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1e293b', margin: 0 }}>
                    4. GENERAL SCOPING REVIEW
                  </h3>
                  {expandedSections.scopingReview ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>

                {expandedSections.scopingReview && (
                  renderStaticSection(STATIC_ASSESSMENT_DATA[3])
                )}
              </div>

              {/* 5. Notification Assessment Section */}
              <div style={{ marginBottom: '32px', padding: '24px', background: 'white', borderRadius: '12px', border: '2px solid #e2e8f0' }}>
                <div 
                  onClick={() => setExpandedSections(prev => ({ ...prev, notification: !prev.notification }))}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    marginBottom: expandedSections.notification ? '20px' : '0'
                  }}
                >
                  <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#1e293b', margin: 0 }}>
                    5. NOTIFICATION ASSESSMENT
                  </h3>
                  {expandedSections.notification ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </div>

                {expandedSections.notification && (
                  renderStaticSection(STATIC_ASSESSMENT_DATA[4])
                )}
              </div>

              {/* 6. AI Recommendations Section - Overall */}
              <div style={{ marginBottom: '32px', padding: '24px', background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)', borderRadius: '12px', border: '2px solid #0ea5e9' }}>
                <div 
                  onClick={() => setExpandedSections(prev => ({ ...prev, aiRecommendations: !prev.aiRecommendations }))}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    marginBottom: expandedSections.aiRecommendations ? '20px' : '0'
                  }}
                >
                  <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#0c4a6e', margin: 0 }}>
                    6. AI RECOMMENDATIONS
                  </h3>
                  {expandedSections.aiRecommendations ? <ChevronUp size={24} color="#0c4a6e" /> : <ChevronDown size={24} color="#0c4a6e" />}
                </div>

                {expandedSections.aiRecommendations && (
                  renderStaticSection(STATIC_ASSESSMENT_DATA[5])
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default App;
