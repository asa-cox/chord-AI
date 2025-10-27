import React, { useState } from 'react';
import { Upload, ChevronDown, ChevronUp, AlertCircle, CheckCircle, AlertTriangle, X, Play, Info, List, FileText, GitBranch } from 'lucide-react';

// CHORD CONSENT ASSESSMENT & SCOPING APP
// Now includes workflow router logic from workflow_router.md

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

function ChordAssessment() {
  const [activeTab, setActiveTab] = useState('assessment');
  const [uploadedFile, setUploadedFile] = useState(null);
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
  const [showWorkflowMenu, setShowWorkflowMenu] = useState(true);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
      setActiveTab('assessment');
    }
  };

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
    }, 1500);
  };

  const runFullWorkflow = () => {
    setWorkflowStage('full_workflow_start');
    // Chain all steps
    runS88Completeness();
    setTimeout(() => runActivityStatus(), 2000);
    setTimeout(() => runComplianceMatrix(), 4000);
    setTimeout(() => runNotificationAssessment(), 6000);
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
                <div style={styles.uploadZone}>
                  <Upload style={{ width: '64px', height: '64px', color: '#2563eb', margin: '0 auto 16px' }} />
                  <p style={{ fontSize: '20px', fontWeight: '700', marginBottom: '8px' }}>
                    Upload Plans or Documents
                  </p>
                  <p style={{ fontSize: '15px', color: '#64748b', marginBottom: '24px' }}>
                    PDF, DWG, or images accepted
                  </p>
                  {uploadedFile && (
                    <div style={{ 
                      display: 'inline-block',
                      padding: '12px 20px', 
                      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                      color: 'white',
                      borderRadius: '10px',
                      fontWeight: '600'
                    }}>
                       {uploadedFile.name}
                    </div>
                  )}
                </div>
              </label>
              <input
                id="file-upload"
                type="file"
                style={{ display: 'none' }}
                onChange={handleFileUpload}
                accept=".pdf,.dwg,.png,.jpg,.jpeg"
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
                  onClick={() => alert('Generate Summary functionality will be built here')}
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
                  onClick={() => alert('Pre-application Check functionality will be built here')}
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
                  onClick={() => alert('Section 88 Check functionality will be built here')}
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
              {(showWorkflowMenu || !workflowStage) && (
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

                  {/* Individual Task Cards */}
                  <div style={{ 
                    background: 'white',
                    borderRadius: '16px',
                    padding: '24px',
                    border: '2px solid #e5e7eb',
                    marginBottom: '24px'
                  }}>
                    <h3 style={{ margin: '0 0 16px 0', fontSize: '18px', fontWeight: '700', color: '#1e293b' }}>
                      Individual Assessment Tasks
                    </h3>
                    <div style={{ display: 'grid', gap: '12px' }}>
                      <div 
                        style={styles.workflowCard}
                        onClick={runS88Completeness}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <CheckCircle size={28} color="#10b981" />
                          <div>
                            <h4 style={{ margin: '0 0 2px 0', fontSize: '16px', fontWeight: '600' }}>
                              Check Completeness (s88)
                            </h4>
                            <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>
                              Verify application has all required information
                            </p>
                          </div>
                        </div>
                      </div>

                      <div 
                        style={styles.workflowCard}
                        onClick={runActivityStatus}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <List size={28} color="#3b82f6" />
                          <div>
                            <h4 style={{ margin: '0 0 2px 0', fontSize: '16px', fontWeight: '600' }}>
                              Determine Activity Status
                            </h4>
                            <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>
                              Classify as Permitted, Controlled, RDA, Discretionary, or Non-Complying
                            </p>
                          </div>
                        </div>
                      </div>

                      <div 
                        style={styles.workflowCard}
                        onClick={runComplianceMatrix}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <FileText size={28} color="#f59e0b" />
                          <div>
                            <h4 style={{ margin: '0 0 2px 0', fontSize: '16px', fontWeight: '600' }}>
                              Check Compliance Matrix
                            </h4>
                            <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>
                              Assess compliance against all applicable district plan rules
                            </p>
                          </div>
                        </div>
                      </div>

                      <div 
                        style={styles.workflowCard}
                        onClick={runNotificationAssessment}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <AlertCircle size={28} color="#8b5cf6" />
                          <div>
                            <h4 style={{ margin: '0 0 2px 0', fontSize: '16px', fontWeight: '600' }}>
                              Notification Assessment
                            </h4>
                            <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>
                              Determine public or limited notification under s95A-s95E
                            </p>
                          </div>
                        </div>
                      </div>

                      <div 
                        style={styles.workflowCard}
                        onClick={runS92Request}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <X size={28} color="#ef4444" />
                          <div>
                            <h4 style={{ margin: '0 0 2px 0', fontSize: '16px', fontWeight: '600' }}>
                              Generate s92 Request
                            </h4>
                            <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>
                              Request further information from applicant
                            </p>
                          </div>
                        </div>
                      </div>

                      <div 
                        style={styles.workflowCard}
                        onClick={runConditionsDrafting}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <CheckCircle size={28} color="#06b6d4" />
                          <div>
                            <h4 style={{ margin: '0 0 2px 0', fontSize: '16px', fontWeight: '600' }}>
                              Draft Consent Conditions
                            </h4>
                            <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>
                              Generate conditions for controlled activities
                            </p>
                          </div>
                        </div>
                      </div>

                      <div 
                        style={styles.workflowCard}
                        onClick={runS42AReport}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <FileText size={28} color="#10b981" />
                          <div>
                            <h4 style={{ margin: '0 0 2px 0', fontSize: '16px', fontWeight: '600' }}>
                              Generate s42A Report
                            </h4>
                            <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>
                              Create planner's report with recommendation
                            </p>
                          </div>
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
                  <>
                    {/* 1.1 Title Details */}
                    <div style={{ marginBottom: '24px', paddingLeft: '16px', borderLeft: '3px solid #e2e8f0' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#475569' }}>
                        Title Details
                      </h4>
                      <div style={{ fontSize: '14px', color: '#64748b' }}>
                        Title information will appear here
                      </div>
                    </div>

                    {/* 1.2 Consent Details */}
                    <div style={{ marginBottom: '24px', paddingLeft: '16px', borderLeft: '3px solid #e2e8f0' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#475569' }}>
                        Consent Details
                      </h4>
                      <div style={{ fontSize: '14px', color: '#64748b' }}>
                        Consent type and requirements will appear here
                      </div>
                    </div>

                    {/* 1.3 District Plan Search */}
                    <div style={{ marginBottom: '24px', paddingLeft: '16px', borderLeft: '3px solid #e2e8f0' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#475569' }}>
                        District Plan Search
                      </h4>
                      <div style={{ fontSize: '14px', color: '#64748b' }}>
                        Zone and overlay information will appear here
                      </div>
                    </div>

                    {/* 1.4 Site Controls */}
                    <div style={{ marginBottom: '24px', paddingLeft: '16px', borderLeft: '3px solid #e2e8f0' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#475569' }}>
                        Site Controls of Significance
                      </h4>
                      <div style={{ fontSize: '14px', color: '#64748b' }}>
                        Heritage and site controls will appear here
                      </div>
                    </div>

                    {/* 1.5 Site Characteristics */}
                    <div style={{ marginBottom: '24px', paddingLeft: '16px', borderLeft: '3px solid #e2e8f0' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#475569' }}>
                        Site Characteristics Checklist
                      </h4>
                      <div style={{ fontSize: '14px', color: '#64748b' }}>
                        Site characteristics assessment will appear here
                      </div>
                    </div>

                    {/* 1.6 Documents */}
                    <div style={{ marginBottom: '24px', paddingLeft: '16px', borderLeft: '3px solid #e2e8f0' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#475569' }}>
                        Documents
                      </h4>
                      <div style={{ fontSize: '14px', color: '#64748b' }}>
                        Document checklist will appear here
                      </div>
                    </div>

                    {/* 1.7 s88 Completeness */}
                    <div style={{ marginBottom: '24px', paddingLeft: '16px', borderLeft: '3px solid #e2e8f0' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#475569' }}>
                        s88 Completeness
                      </h4>
                      <div style={{ fontSize: '14px', color: '#64748b' }}>
                        s88 checklist results will appear here
                      </div>
                    </div>

                    {/* 1.8 Assessment */}
                    <div style={{ marginBottom: '24px', paddingLeft: '16px', borderLeft: '3px solid #e2e8f0' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#475569' }}>
                        Assessment
                      </h4>
                      <div style={{ fontSize: '14px', color: '#64748b' }}>
                        Rule compliance assessment will appear here
                      </div>
                    </div>

                    {/* 1.9 Summary */}
                    <div style={{ paddingLeft: '16px', borderLeft: '3px solid #e2e8f0' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#475569' }}>
                        Summary
                      </h4>
                      <div style={{ fontSize: '14px', color: '#64748b' }}>
                        Assessment summary will appear here
                      </div>
                    </div>
                  </>
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
                  <>
                    {/* 2.1 Application Type and Formality Check */}
                    <div style={{ marginBottom: '24px', paddingLeft: '16px', borderLeft: '3px solid #e2e8f0' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#475569' }}>
                        Application Type and Formality Check
                      </h4>
                      <div style={{ fontSize: '14px', color: '#64748b' }}>
                        Formal lodgement and application type verification will appear here
                      </div>
                    </div>

                    {/* 2.2 Deemed Permitted Activity Screening */}
                    <div style={{ marginBottom: '24px', paddingLeft: '16px', borderLeft: '3px solid #e2e8f0' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#475569' }}>
                        Deemed Permitted Activity Screening
                      </h4>
                      <div style={{ fontSize: '14px', color: '#64748b' }}>
                        s87BA and s87BB assessment will appear here
                      </div>
                    </div>

                    {/* 2.3 Application Redirection Check */}
                    <div style={{ marginBottom: '24px', paddingLeft: '16px', borderLeft: '3px solid #e2e8f0' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#475569' }}>
                        Application Redirection Check
                      </h4>
                      <div style={{ fontSize: '14px', color: '#64748b' }}>
                        Permitted activity and application quality check will appear here
                      </div>
                    </div>

                    {/* 2.4 AI Recommendations */}
                    <div style={{ paddingLeft: '16px', borderLeft: '3px solid #0ea5e9' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#0369a1' }}>
                        AI Recommendations
                      </h4>
                      <div style={{ fontSize: '14px', color: '#0369a1' }}>
                        AI-generated pre-application recommendations will appear here
                      </div>
                    </div>
                  </>
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
                  <>
                    {/* 3.1 Application Requirements */}
                    <div style={{ marginBottom: '24px', paddingLeft: '16px', borderLeft: '3px solid #e2e8f0' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#475569' }}>
                        Application Requirements
                      </h4>
                      <div style={{ fontSize: '14px', color: '#64748b' }}>
                        Form, title, documentation checklist will appear here
                      </div>
                    </div>

                    {/* 3.2 Section 104(1)(b) Statutory Documents */}
                    <div style={{ marginBottom: '24px', paddingLeft: '16px', borderLeft: '3px solid #e2e8f0' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#475569' }}>
                        Section 104(1)(b) Statutory Documents
                      </h4>
                      <div style={{ fontSize: '14px', color: '#64748b' }}>
                        NES, NPS, NZCPS, RPS, District Plan assessment will appear here
                      </div>
                    </div>

                    {/* 3.3 Assessment of Environmental Effects */}
                    <div style={{ marginBottom: '24px', paddingLeft: '16px', borderLeft: '3px solid #e2e8f0' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#475569' }}>
                        Assessment of Environmental Effects
                      </h4>
                      <div style={{ fontSize: '14px', color: '#64748b' }}>
                        AEE quality and Schedule 4 compliance will appear here
                      </div>
                    </div>

                    {/* 3.4 Plans and Drawings */}
                    <div style={{ marginBottom: '24px', paddingLeft: '16px', borderLeft: '3px solid #e2e8f0' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#475569' }}>
                        Plans and Drawings
                      </h4>
                      <div style={{ fontSize: '14px', color: '#64748b' }}>
                        Plan completeness and quality assessment will appear here
                      </div>
                    </div>

                    {/* 3.5 Specialist Reports */}
                    <div style={{ marginBottom: '24px', paddingLeft: '16px', borderLeft: '3px solid #e2e8f0' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#475569' }}>
                        Specialist Reports
                      </h4>
                      <div style={{ fontSize: '14px', color: '#64748b' }}>
                        Required reports and adequacy assessment will appear here
                      </div>
                    </div>

                    {/* 3.6 Written Approvals */}
                    <div style={{ marginBottom: '24px', paddingLeft: '16px', borderLeft: '3px solid #e2e8f0' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#475569' }}>
                        Written Approvals
                      </h4>
                      <div style={{ fontSize: '14px', color: '#64748b' }}>
                        Affected party approvals will appear here
                      </div>
                    </div>

                    {/* 3.7 Iwi Engagement */}
                    <div style={{ marginBottom: '24px', paddingLeft: '16px', borderLeft: '3px solid #e2e8f0' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#475569' }}>
                        Iwi Engagement
                      </h4>
                      <div style={{ fontSize: '14px', color: '#64748b' }}>
                        Mana whenua consultation record will appear here
                      </div>
                    </div>

                    {/* 3.8 Other Consents */}
                    <div style={{ marginBottom: '24px', paddingLeft: '16px', borderLeft: '3px solid #e2e8f0' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#475569' }}>
                        Other Consents
                      </h4>
                      <div style={{ fontSize: '14px', color: '#64748b' }}>
                        Related consent history will appear here
                      </div>
                    </div>

                    {/* 3.9 AI Recommendations */}
                    <div style={{ paddingLeft: '16px', borderLeft: '3px solid #0ea5e9' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#0369a1' }}>
                        AI Recommendations
                      </h4>
                      <div style={{ fontSize: '14px', color: '#0369a1' }}>
                        AI-generated s88 recommendations will appear here
                      </div>
                    </div>
                  </>
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
                  <>
                    {/* 4.1 Site Overlays */}
                    <div style={{ marginBottom: '24px', paddingLeft: '16px', borderLeft: '3px solid #e2e8f0' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#475569' }}>
                        Site Overlays
                      </h4>
                      <div style={{ fontSize: '14px', color: '#64748b' }}>
                        Special character, viewshafts, and other overlay assessments will appear here
                      </div>
                    </div>

                    {/* 4.2 Natural Environment Overlays */}
                    <div style={{ marginBottom: '24px', paddingLeft: '16px', borderLeft: '3px solid #e2e8f0' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#475569' }}>
                        Natural Environment Overlays
                      </h4>
                      <div style={{ fontSize: '14px', color: '#64748b' }}>
                        CEHA, flooding, natural hazards assessment will appear here
                      </div>
                    </div>

                    {/* 4.3 National Instruments */}
                    <div style={{ marginBottom: '24px', paddingLeft: '16px', borderLeft: '3px solid #e2e8f0' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#475569' }}>
                        National Instruments
                      </h4>
                      <div style={{ fontSize: '14px', color: '#64748b' }}>
                        NPS, NES, and NZCPS compliance will appear here
                      </div>
                    </div>

                    {/* 4.4 Activity Status Review */}
                    <div style={{ marginBottom: '24px', paddingLeft: '16px', borderLeft: '3px solid #e2e8f0' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#475569' }}>
                        Activity Status Review
                      </h4>
                      <div style={{ fontSize: '14px', color: '#64748b' }}>
                        Final activity status determination will appear here
                      </div>
                    </div>

                    {/* 4.5 AI Recommendations */}
                    <div style={{ paddingLeft: '16px', borderLeft: '3px solid #0ea5e9' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#0369a1' }}>
                        AI Recommendations
                      </h4>
                      <div style={{ fontSize: '14px', color: '#0369a1' }}>
                        AI-generated scoping recommendations will appear here
                      </div>
                    </div>
                  </>
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
                  <>
                    {/* 5.1 Step 1: Mandatory Public Notification */}
                    <div style={{ marginBottom: '24px', paddingLeft: '16px', borderLeft: '3px solid #e2e8f0' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#475569' }}>
                        Step 1: Mandatory Public Notification (s95A(2)-(4))
                      </h4>
                      <div style={{ fontSize: '14px', color: '#64748b' }}>
                        Applicant request, NES contraventions, s92 refusal assessment will appear here
                      </div>
                    </div>

                    {/* 5.2 Step 2: Public Notification Precluded */}
                    <div style={{ marginBottom: '24px', paddingLeft: '16px', borderLeft: '3px solid #e2e8f0' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#475569' }}>
                        Step 2: Public Notification Precluded (s95A(5))
                      </h4>
                      <div style={{ fontSize: '14px', color: '#64748b' }}>
                        Boundary activity and controlled/RDA preclusion assessment will appear here
                      </div>
                    </div>

                    {/* 5.3 Step 3: Effects Assessment */}
                    <div style={{ marginBottom: '24px', paddingLeft: '16px', borderLeft: '3px solid #e2e8f0' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#475569' }}>
                        Step 3: Public Notification Required (s95A(8))
                      </h4>
                      <div style={{ fontSize: '14px', color: '#64748b' }}>
                        More than minor effects assessment will appear here
                      </div>
                    </div>

                    {/* 5.4 Step 4: Limited Notification */}
                    <div style={{ marginBottom: '24px', paddingLeft: '16px', borderLeft: '3px solid #e2e8f0' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#475569' }}>
                        Step 4: Limited Notification Required (s95B)
                      </h4>
                      <div style={{ fontSize: '14px', color: '#64748b' }}>
                        Affected persons and protected customary rights holders assessment will appear here
                      </div>
                    </div>

                    {/* 5.5 Notification Summary */}
                    <div style={{ marginBottom: '24px', paddingLeft: '16px', borderLeft: '3px solid #e2e8f0' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#475569' }}>
                        Notification Summary
                      </h4>
                      <div style={{ fontSize: '14px', color: '#64748b' }}>
                        Final notification recommendation will appear here
                      </div>
                    </div>

                    {/* 5.6 AI Recommendations */}
                    <div style={{ paddingLeft: '16px', borderLeft: '3px solid #0ea5e9' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#0369a1' }}>
                        AI Recommendations
                      </h4>
                      <div style={{ fontSize: '14px', color: '#0369a1' }}>
                        AI-generated notification recommendations will appear here
                      </div>
                    </div>
                  </>
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
                  <>
                    {/* 6.1 Overall Assessment */}
                    <div style={{ marginBottom: '24px', paddingLeft: '16px', borderLeft: '3px solid #0ea5e9' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#0369a1' }}>
                        Overall Assessment
                      </h4>
                      <div style={{ fontSize: '14px', color: '#0369a1' }}>
                        Executive summary and verdict will appear here
                      </div>
                    </div>

                    {/* 6.2 Environmental Effects Summary */}
                    <div style={{ marginBottom: '24px', paddingLeft: '16px', borderLeft: '3px solid #0ea5e9' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#0369a1' }}>
                        Environmental Effects Summary
                      </h4>
                      <div style={{ fontSize: '14px', color: '#0369a1' }}>
                        Comprehensive effects analysis across all aspects will appear here
                      </div>
                    </div>

                    {/* 6.3 Section 88 Acceptance */}
                    <div style={{ marginBottom: '24px', paddingLeft: '16px', borderLeft: '3px solid #0ea5e9' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#0369a1' }}>
                        Section 88 Acceptance
                      </h4>
                      <div style={{ fontSize: '14px', color: '#0369a1' }}>
                        Accept/reject recommendation with verification items will appear here
                      </div>
                    </div>

                    {/* 6.4 Processing Pathway */}
                    <div style={{ marginBottom: '24px', paddingLeft: '16px', borderLeft: '3px solid #0ea5e9' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#0369a1' }}>
                        Processing Pathway
                      </h4>
                      <div style={{ fontSize: '14px', color: '#0369a1' }}>
                        Complexity assessment and recommended pathway will appear here
                      </div>
                    </div>

                    {/* 6.5 Required Specialist Referrals */}
                    <div style={{ marginBottom: '24px', paddingLeft: '16px', borderLeft: '3px solid #0ea5e9' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#0369a1' }}>
                        Required Specialist Referrals
                      </h4>
                      <div style={{ fontSize: '14px', color: '#0369a1' }}>
                        Internal specialist consultation requirements will appear here
                      </div>
                    </div>

                    {/* 6.6 Notification Recommendation */}
                    <div style={{ marginBottom: '24px', paddingLeft: '16px', borderLeft: '3px solid #0ea5e9' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#0369a1' }}>
                        Notification Recommendation
                      </h4>
                      <div style={{ fontSize: '14px', color: '#0369a1' }}>
                        Preliminary notification assessment will appear here
                      </div>
                    </div>

                    {/* 6.7 Key Planner Focus Areas */}
                    <div style={{ paddingLeft: '16px', borderLeft: '3px solid #0ea5e9' }}>
                      <h4 style={{ fontSize: '16px', fontWeight: '600', marginBottom: '12px', color: '#0369a1' }}>
                        Key Planner Focus Areas
                      </h4>
                      <div style={{ fontSize: '14px', color: '#0369a1' }}>
                        Critical items requiring planner judgment will appear here
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* PLANNER ACTIONS SECTION */}
              <div style={{ 
                marginTop: '32px',
                padding: '32px', 
                background: 'white', 
                borderRadius: '12px', 
                border: '2px solid #e2e8f0',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
              }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '6px', color: '#1e293b' }}>
                  Next Actions
                </h3>
                <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '24px' }}>
                  Complete assessment workflow and export results
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
                  {/* Export PDF */}
                  <button
                    onClick={() => alert('Export to PDF functionality - generates comprehensive assessment report as PDF')}
                    style={{
                      padding: '14px 20px',
                      background: 'white',
                      border: '1.5px solid #2563eb',
                      borderRadius: '8px',
                      color: '#2563eb',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      justifyContent: 'center',
                      transition: 'all 0.2s ease',
                      fontFamily: 'inherit'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#2563eb';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'white';
                      e.currentTarget.style.color = '#2563eb';
                    }}
                  >
                    <FileText size={18} />
                    Export PDF Report
                  </button>

                  {/* Export Word */}
                  <button
                    onClick={() => alert('Export to Word functionality - generates editable assessment report as DOCX')}
                    style={{
                      padding: '14px 20px',
                      background: 'white',
                      border: '1.5px solid #2563eb',
                      borderRadius: '8px',
                      color: '#2563eb',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      justifyContent: 'center',
                      transition: 'all 0.2s ease',
                      fontFamily: 'inherit'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#2563eb';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'white';
                      e.currentTarget.style.color = '#2563eb';
                    }}
                  >
                    <FileText size={18} />
                    Export Word Document
                  </button>

                  {/* Generate s92 */}
                  <button
                    onClick={() => alert('Generate s92 Request functionality - creates further information request based on identified gaps')}
                    style={{
                      padding: '14px 20px',
                      background: 'white',
                      border: '1.5px solid #f59e0b',
                      borderRadius: '8px',
                      color: '#f59e0b',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      justifyContent: 'center',
                      transition: 'all 0.2s ease',
                      fontFamily: 'inherit'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#f59e0b';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'white';
                      e.currentTarget.style.color = '#f59e0b';
                    }}
                  >
                    <AlertCircle size={18} />
                    Generate s92 RFI
                  </button>

                  {/* Assign to Planner */}
                  <button
                    onClick={() => alert('Assign to planner functionality - routes application to specific team member')}
                    style={{
                      padding: '14px 20px',
                      background: 'white',
                      border: '1.5px solid #64748b',
                      borderRadius: '8px',
                      color: '#64748b',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      justifyContent: 'center',
                      transition: 'all 0.2s ease',
                      fontFamily: 'inherit'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#64748b';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'white';
                      e.currentTarget.style.color = '#64748b';
                    }}
                  >
                    <CheckCircle size={18} />
                    Assign to Planner
                  </button>

                  {/* Send to Specialist */}
                  <button
                    onClick={() => alert('Send to specialist functionality - requests peer review from heritage/engineering/environmental specialists')}
                    style={{
                      padding: '14px 20px',
                      background: 'white',
                      border: '1.5px solid #64748b',
                      borderRadius: '8px',
                      color: '#64748b',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      justifyContent: 'center',
                      transition: 'all 0.2s ease',
                      fontFamily: 'inherit'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#64748b';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'white';
                      e.currentTarget.style.color = '#64748b';
                    }}
                  >
                    <List size={18} />
                    Send to Specialist
                  </button>

                  {/* Save to CRM */}
                  <button
                    onClick={() => alert('Save to CRM functionality - exports assessment to council consent management system')}
                    style={{
                      padding: '14px 20px',
                      background: 'white',
                      border: '1.5px solid #10b981',
                      borderRadius: '8px',
                      color: '#10b981',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      justifyContent: 'center',
                      transition: 'all 0.2s ease',
                      fontFamily: 'inherit'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#10b981';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'white';
                      e.currentTarget.style.color = '#10b981';
                    }}
                  >
                    <Upload size={18} />
                    Save to CRM
                  </button>

                  {/* Add to Calendar */}
                  <button
                    onClick={() => alert('Add to calendar functionality - creates statutory timeframe reminders and key dates')}
                    style={{
                      padding: '14px 20px',
                      background: 'white',
                      border: '1.5px solid #64748b',
                      borderRadius: '8px',
                      color: '#64748b',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      justifyContent: 'center',
                      transition: 'all 0.2s ease',
                      fontFamily: 'inherit'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#64748b';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'white';
                      e.currentTarget.style.color = '#64748b';
                    }}
                  >
                    <AlertCircle size={18} />
                    Add to Calendar
                  </button>

                  {/* Email Applicant */}
                  <button
                    onClick={() => alert('Email applicant functionality - generates email with assessment results and next steps')}
                    style={{
                      padding: '14px 20px',
                      background: 'white',
                      border: '1.5px solid #64748b',
                      borderRadius: '8px',
                      color: '#64748b',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      justifyContent: 'center',
                      transition: 'all 0.2s ease',
                      fontFamily: 'inherit'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#64748b';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'white';
                      e.currentTarget.style.color = '#64748b';
                    }}
                  >
                    <FileText size={18} />
                    Email Applicant
                  </button>

                  {/* Start New Assessment */}
                  <button
                    onClick={() => alert('Start new assessment functionality - clears current data and returns to upload')}
                    style={{
                      padding: '14px 20px',
                      background: 'white',
                      border: '1.5px solid #ef4444',
                      borderRadius: '8px',
                      color: '#ef4444',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      justifyContent: 'center',
                      transition: 'all 0.2s ease',
                      fontFamily: 'inherit'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#ef4444';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'white';
                      e.currentTarget.style.color = '#ef4444';
                    }}
                  >
                    <X size={18} />
                    Start New Assessment
                  </button>
                </div>
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

export default ChordAssessment;
