var controls = ["cCchHB", "cCyc", "cCycHB", "cCycHW", "cFIO", "cMCC", "cPend", "cTC", "cTCHB", "cTrt", "cTrtHB"];

var controlsDescription = ["Couch Heartbeat", "Cyclotron PLC", "Cyclotron PLC Heartbeat", "Cycltron PLC Hardware", "PLC Forced I/O", "Master Control Computer", "Couch Pendant", "Therapy Console", "Therapy Console Heartbeat", "Treatment PLC", "Treatment PLC Heartbeat"];

var controlsStatus = ["Treatment PLC reports heartbeat from Kuka to Treatment PLC is incrementing", "Cyclotron PLC is powered on, communicating and not faulted", "Cyclotron PLC's heartbeat has updated at least once every 500ms to ensure non-stale communication", "Cyclotron PLC reports hardware normal", "Both PLCs report that there are not any forced inputs or outputs. No outside control (connected laptop)", "MCC heartbeat is incrementing and there was not an unplanned shutdown of MCC", "Kuka Teach Pendant is in External Mode and no internal couch E-stops", "TC reports it is healthy, and MCC is receiving heartbeat data from TC Clinical. Only satisfied in Clinical or Physics Mode; always overridden in Service", "MevTDS is alive and publishing heartbeat to MCC. Only satisfied in Clinical or Physics Mode; always overridden in Service", "Treatment PLC is powered on, communicating and not faulted", "Treatment PLC's heartbeat has updated at least once every 500ms to ensure non-stale communication"];

var dosimetry = ["dDone", "dDose1", "dDose2", "dCharge", "dPos", "dShift", "dSize", "dEnv", "dBEQPos", "dBEQBP", "dTime", "dPMax", "dCompare"];

var dosimetryDescription = ["Treatment Complete", "Total Dose Delivered to Doseplane 1", "Total Dose Delivered to Doseplane 2", "Spot Charge Limit", "Spot/Pulse Position Limit", "Total Layer Shift", "Spot Size", "Dosimetry Environmentals", "BEQ Position", "BEQ Back-projection", "Prescription Time", "Beam Paused Timeout", "Dosimetry Charge Comparison"];

var dosimetryStatus = ["Satisfied when a field is loaded and go unsatisfied at the end of a successful treatment", "Total dose delivered to Doseplane 1 (cumulativ, synchronus) remains below configurable percent or absolute MU over prescribed total dose AND total dose delivered to Doseplane 1 (recycling) remains below configurable percent or absolute MU over prescribed total dose", "Total dose delivered to Doseplane 2 (cumulativ, synchronus) remains below configurable percent or absolute MU over prescribed total dose AND total dose delivered to Doseplane 2 (recycling) remains below configurable percent or absolute MU over prescribed total dose", "Individual spot charge has not exceeded prescribed charge by configurable amount", "Spot/Pulse location is within the configured tolerance. Includes fast position check, comparing max channel to target max channel and adjacency check. Includes a slower position check, used to both compute the average error for the layer and individual error for pulses/spots", "Requested one-time X or Y layer shift is below configurable value", "Spot size is within the configurable tolerance; includes both pulse to pulse and layer average checks", "All 3 temp and all 3 pressure readings within configurable min and max values, and all 3 readings for each agree within configurable values", "The measured X and Y positions at the exit port are within tolerance of center (0mm)", "Charge weighted average error in the back-projected position is within the tolerance of nominal 0mm", "Time in the state Beam On is less than the prescribed maximum time, calculated by applying a 20% overage to the expected time given the number of pulses, layer switches, AA moves, avg. retries, etc.", "System has not been in the state 'Beam Pause' for more than the configurable time", "All 8 Dosimetry comparisons are within configurable tolerances of configurable targets: D1 to UY, UY to DY, CSD1 to RI1, D2 to UX, UX, to DX, CSD2 to RI2, D1 to D2, D1 to BEQ Sum"];

var outerGantry = ["gEnc", "gLimit", "gParkT", "gParkZ", "gReady", "gSpSZ", "gSPNZ", "gTwist", "gAlign"];

var outerGantryDescription = ["Outer Gantry Encoders", "Outer Gantry Limit", "Outer Gantry Minimum Park Time", "Outer Gantry Park Zone", "Outer Gantry Ready", "Outer Gantry Slow Zone Speed", "Outer Gantry Normal Zone Speed", "Outer Gantry Twist", "Gantry-CIG Alignment"];

var outerGantryStatus = ["Neither of the two Outer Gantry Load Encoders indicate a fault", "The outer gantry is within the soft end-of-travel limits (B-limit switches)", "If either of the OG is outside the Park Cooling Safe Range, or if the Time Parked exceeds the lesser of the Time Away or the configurable timeout while within the Park Cooling Safe Range", "The outer Gantry is within the configurable Park Cooling Safe Range", "The OG has successfully met the configuration specified by the TC for a given prescription within 0.05deg tolerance", "The PLC has not detected an excessive motor-encoder velocity in either of the Slow Speed Zones (A-limit switches)", "The PLC has not detected an excessive motor-encoder velocity in the Normal Speed Zone", "The OG's load encoders indicate that the arms are aligned to one another within the configurable Gantry Twist Max", "Satisfied when OG and IG offset is within tolerance of prescribed offset"];

var hospital = ["hCKey", "hEMOff", "hHSSSt", "hVault", "hMaint", "hDoor", "hBKey", "HMKey", "hUPSSc", "hUPSAC", "hUPSTO", "hUPSSt", "hHSSCC", "hHSSOG"];

var hospitalDescription = ["Console Key", "Emergency Off", "Hardwired Safety System Status", "Lower Vault Door", "Maintenance Hatch", "Treatment Room Door", "Beam Enable Key", "Motion Enable Key", "Secondary UPS", "UPS on AC", "UPS on Battery", "UPS Status", "HSS CIG/Couch Motion Key", "HSS OG Motion Key"];

var hospitalStatus = ["PLC reports console key is enabled. Locks TC when key is disabled or comms lost", "PLC reports that none of the site Emergency Off buttons are engaged", "Entire HSS chain is satisfied in hardware. Includes: Aperatures, XYZ Status, Dosimetry Status, Doors, EMOs, and Keys", "PLC reports that the lower vault door is closed and has sounded the 30-second warning alarm", "PLC reports that the upper maintenance hathc door is closed", "PLC reports that the treatment room door is closed", "PLC reports that the Beam Enable key is enabled and any and all warning alarms and search keys have been activated. This unsatisfies HMKey and prevents motion", "PLC reports that the Motion Enable Key is enabled. This unsatisfies HBKey and prevents beam", "Secondary UPS has not lost communications, gone off AC power, lost battery charge or health, overloaded, or faulted, for a configurable amount of time", "Primary UPS is on AC Power (not battery)", "Primary UPS is on AC Power (or battery for less than the configurable timeout)", "Primary UPS is operational: not faulted, bypassed, or lost battery charge for configurable timeouts", "HSS CIG/Couch Motion Override Key is OFF", "HSS OG Motion OVerride Key is OFF"];

var ionSource = ["iGRdy", "iGRate", "iGTime", "iPCV"];

var ionSourceDescription = ["Ion Source Gas Flow Ready", "Ion Source Gas Flow Rate", "Ion Source Gas Flow Maximum Time", "Ion Source Pulser Chassis Voltage"];

var ionSourceStatus = ["Gas flow has been enabled for 5 seconds", "Gas flow is enabled and the rate is within configurable tolerance", "Gas flow has not been enabled continuously for more than the configurable time", "Actual Ion-Source Cathode Voltage Readback differs from the set-point by less than the configurable 'Max Voltage Deviation' percentage"];

var magnet = ["mChgd", "mTrdy", "mCool", "mCryoV", "mPSSP", "mDCCT", "mHePrs", "mTempL", "mTempH", "mLEM", "mMCS", "mQDSP1", "mQDSP2", "mQDSP", "mQDSPP", "mSDA", "mACP"];

var magnetDescription = ["Magnet Charged", "Magnet Treatment Ready", "Magnet Cooling Capacity", "Magnet Cryostat Vacuum", "Magnet Power Supply Self Protection Range", "Direct-Current Current Transformer Status", "Helium Pressure", "Magnet Lead Warning (Low) Temperatures", "Magnet Lead Discharge (High) Temperatures", "LEM/DCCT Tolerance", "Molded Case Switches", "QDSP 1 Communications", "QDSP 2 Communications", "QDSP Enabled", "QDSP Power Supply", "Magnet Slow Discharge Assembly", "Magnet Coil Position (ACP)"];

var magnetStatus = ["Magnet current is within a configurable plus/minus tolerance of the configurable commisioned magnet current set-point", "Magent power supply is in state REGULATION, and the magnet current is within the configurable magnet power supply current tolerance for more than 10 seconds", "Cooling capacity (heater power) is above 0W or at 0W for less than configurable time period. Interlock only changes state when there is an active helium pressure reading from the MIC", "No error is reported on the gauge and the cryostat pressure is less than the configurable maximum", "The cyclotron PLC reports that the DMM is operational and Magnet Current is below the configured slow discharge threshold", "Direct-Current Current Transformer (DCCT) is operating normally", "Helium Pressure is below configurable maximum. Interlock only changes state when there is an active helium pressure ready from the MIC", "No TMUX temperature value exceeds configurable warning threshold on Magnet: Setup tab", "No TMUX temperature value exceeds configurable slow discharge threshold on Magnet: Setup Tab. Additionally, neither External Lead exceeds configurable maximum temperature threshold", "DCCT is operating normally, comms exist with both QDSPs, and two LEM current values are within configurable tolerance of DCCT reading", "MCS power supplies, QDSP fibers, magnet ground fuse and VFD line contactor status are all OK", "Satisfied when QDSP 1's heartbeat has changed at least once in the past 6 seconds", "Satisified when QDSP 2's heartbeat has changed at least once in the past 6 seconds", "DCCT is operating normally and DMM reports less than 400 amps or both QDSPs are enabled", "DCCT is operating normally and DMM reports less than 400 amps or both power supplies enabled", "Magnet Slow Discharge Assembly MCS is closed", "The cold mass is in position as determined by both magnetic field (Hall) sensors, within configurable tolerance of configurable targets"];

var rf = ["rfCMLd", "rfCMSt", "rfDCBV", "rfDCBI", "rRotCS", "rRotCI"];

var rfDescription = ["RF Control Module Loaded", "RF Control Module Status", "RF DC Bias Power Supply Voltage", "RF DC Bias Power Supply Current", "Rotating Capacitor Normal Speed", "Rotating Capacitor Idle Speed"];

var rfStatus = ["Triggers and Delays loaded into RFCM by MCC and verified by readback, and RFCM is Online and is in correct state", "RFCM has been on less than the configurable max time, has no errors, the state matches the expected state, no rejected commands, no loss of Heartbeat from RFCM to MCC and no RFCM overrides are enabled", "Satisfied while the absolute value of the RF DC Bias Power Supply Voltage Readback is greater than the absolute value of the configurable Interrupt value", "Satisfied while the RF DC Bias Power Supply Current Readback is less than the configurable RF DC Bias Current Terminate value", "The ROTC's velocity is within the configurable tolerance of the configurable Normal Speed", "The ROTC's velocity is greater than the configurable Idle Speed minus the configurable tolerance"];

var scanning = ["sXYZLd", "sXYZSt", "sDOS1Ld", "sDOS1St", "sDOS2Ld", "sDOS2St", "sACMLd", "sACMSt", "smASt", "sRSPos", "sRSErr", "sAAPos", "sAAErr"];

var scanningDescription = ["XYZ Controller Loaded", "XYZ Controller Status", "DOS_Y Controller Loaded", "DOS_Y Controller Status", "DOS_X Controller Loaded", "DOS_X Controller Status", "ACM Controller Loaded", "ACM Controller Status", "Scanning Magnet Amplifier Status", "Range Shifter Position", "Range Shifter Error", "Adaptive Aperature Position", "Adaptive Aperature Error"];

var scanningStatus = ["XYZ PCM has been configured with all required treatment parameters and Treatment map has been loaded. Scanning magnet current has not failed to reach the commanded current in the configurable # of seconds. Pulse Retry count limit has been met", "XYZ Proton Core Module reports a heartbeat to the MCC and all subsystem overrides are disabled", "DOS_Y PCM has been configured with all required treatment parameters, Treatment map has been loaded. Unsatisfies if test charge injection fails", "DOS_Y PCM reports a heartbeat to the MCC, all subsystem overrides are disabled and HV is present and within configurable tolerance", "DOS_X PCM has been configured with all required treatment parameters and Treatment map has been loaded. Unsatidfies if test charge injection fails", "DOS_X PCM reports a heartbeat to the MCC, all subsystem overrides are disabled and HV is present and within configurable tolerance", "ACM PCM has been configured with all required treatment parameters and an AA map has been loaded and startup configuration verified", "ACM PCM reports a heartbeat to the MCC, all subsystem overrides are disabled, motors are both configured and enabled", "Scanning Magnet Amplifier is not faulted", "Redundant position sensors are in agreement", "Range shifter does not have any non-recoverable errors and the pre-beam calibration check has not failed", "AA Redundant position sensors are both in tolerance and not motor timeouts", "The AA motors are configured and the following errors have not occured: Homing failed, calibration verification failed, motor failure or configuration error"];

var treatmentRoom = ["tCIGBM", "tCIGSp", "tExtSp", "tMotOK", "tCIGMt", "tXPLat", "tXPPA", "tXPSZ", "tXPExt", "tXSrcE", "tPAX", "tPAXOG", "tPAXHm", "tCAX", "tCIGSec", "tCBCT", "tCBImOK"];

var treatmentRoomDescription = ["C-Inner Gantry Motion", "C-Inner Gantry Speed", "C-Inner Gantry Speed", "Motion Allowed", "C-Inner Gantry Motion Errors", "X-Ray Panel LAT Deployed Vertically", "X-Ray Panel PA Deployed Horizontally", "X-Ray Panels in Safe Zone", "X-Ray Panels Deployed", "PA X-Ray Source Extended", "PA X-Ray Sorce Location", "Outer Gantry in Safe Zone for PA X-Ray Source", "PA X-Ray Home", "Central Axis Laser Location", "CIG Secondary Position Check", "CT Scanner(s) Parked", "CT Image Acwuisition OK"];

var treatmentRoomStatus = ["No CIG Theta or Extension motion detected in Beam Ready, Beam On or Beam Pause", "ANy CIG Theta motion or Extension Retraction is below the speed threshold", "CIG Extension toweards the patient is below the speed threshold. Interlock is cleared by releasing enable bars on the hand pendant", "System State must not be Beam Ready, Beam On or Beam Pause", "No CIG Motion Faults are detected, including unexpected motion without 'moving' indicator or failure to meet stopping distance", "LAT X-Ray Panel is Deployed Vertically and PA X-Ray Panel is not stowed veritcally", "PA X-Ray Panel is deployed horizontally", "X-Ray panels are retracted and CIG is safe to move", "X-Ray panels are extended (deployed)", "The PA X-Ray sorce's resolver position is within its configurable tolerance of its configurable Treatment Position, and the PLC indicates that the secondary position sensors are satisfied", "The PLC indicates that the PA X-Ray source is at the retracted position as determined by the state and consistency of the secondary position sensors and the Outer Gantry is free to move anywhere", "The Outer Gantry's position is less than or equal to the Gantry's PA X-Ray Source Interference threshold and the PA X-Ray Source is now free to deploy", "The PA X-Ray source has successfully homed; homing is lost when power or comms are lost", "The CAX Laser is retracted", "Both CIG Theta Readings and both CIG Extension Readings agree with configurable tolerances", "Satisfied when all installed CT scanners are in the parked position", "CT Imaging is enabled when the couch is in the scanning position. The system must not be in the BEAM_ON state in order to acquire images"];

var vacuum = ["vPrep", "vBeam", "vInt", "vTerm"];

var vacuumDescription = ["Cyclotron Beam Chamber Pressure for Beam Prep", "Cyclotron Beam Chamber Pressure for Beam ON", "Cyclotron Beam Chamber Pressure for Beam Interrupt", "Cyclotron Beam Chamber Pressure for Beam Terminate"];

var vacuumStatus = ["Actual Cyclotron Beam Chamber Vacuum Pressure (G3) is less than the configurable threshold value required for the state Beam Prep", "Actual Cyclotron Beam Chamber Vacuum Pressure (G3) is less than the configurable threshold value required for the state Beam On", "Actual Cyclotron Beam Chamber Vacuum Pressure (G3) is less than the configurable threshold value required for the state Beam Interrupt (Pause)", "Actual Cyclotron Beam Chamber Vacuum Pressure (G3) is less than the configurable threshold value required for the state Beam Terminate"];

var cooling = ["WHExS", "wHEx1", "wHEx2", "wHEx3", "wCryo8", "wCryo5", "wCryo6", "wCryo7", "wCryoF", "wCryoT", "wRFAF", "wRFAT", "wICWF", "wICWT", "wRStkF", "wRStkT", "wROutF", "wROutT", "wFlyBT", "wRectT", "wSMSt"];

var coolingDescription = ["Heat Exchanger Water Source", "Cryo-Compressor Heat Exchanger A1", "RF Amp Heat Exchanger A2", "Cyclotron Heat Exchanger A3", "Cryogenic Compressor A8", "Cryogenic Compressor A5", "Cryogenic Compressor A6", "Cryogenic Compressor A7", "Cryogenic Compressor A8 Flow", "Cryogenic Compressor A8 Temperature", "RF Amplifier Water Cooling Flow", "RF Amplifier Water Cooling Temperature", "Inner Conductor Water Cooling Flow", "Inner Conductor Water Cooling Temperature", "A/C Rectifier Stack Cooling Water Flow", "A/C Rectifier Stack Cooling Water Temp", "Rotating Capacitor Water Cooling Flow", "Rotating Capacitor Water Cooling Temperature", "Flyback Diode Overtemp", "AC Rectifier Stack Diode Overtemp", "Scanning Magnet Cooling Status"];

var coolingStatus = ["System is not on City Water Bypass and heat exchangers are operating normally", "Cryo Compressor Heat Exchanger (A1) is operating normally with a chilled water temp below 23deg C", "RF Amplifier HEat Exchanger (A2) is operating normally with a chilled water temp below 23deg C", "Cyclotron Heat Exchanger (A3) is operating normally with a chilled water temp below 23deg C", "Cryogenic Compressor (A8) is operating normally and is not faulted", "Cryogenic Compressor (A5) is operating normally and is not faulted", "Cryogenic Compressor (A6) is operating normally and is not faulted", "Cryogenic Compressor (A7) is operating normally and is not faulted", "Cryogenic Compressor (A8) has a sufficient water flow rate", "Water temperature in Cryogenic Compressor (A8) is sufficiently cool", "RF Amplifier has a sufficient water flow rate", "Water temperature in RF amplifier is sufficiently cool", "RF Inner Conductor has a sufficient water flow rate", "Water temperature in RF Inner Conductor is sufficiently cool", "A/C Rectifier Stack has a sufficient water flow rate", "Water temperature in A/C Rectifier Stack is sufficiently cool", "Outer Conductor/ Rotating Capacitor (ROTC) has a sufficient water flow rate", "Water temperature in Outer Conductor / Rotating Capacitor (ROTC) is sufficiently cool", "Flyback diode is below the configurable temperature threshold", "Rectifier Stack is below the configurable temperature threshold", "Scanning magnet cooling system is not faulted"];

/* Removed until I figure out how to add the functions together
var allInterlocks = [];

var allInterlocksDescription = [];

var allInterlocksStatus = [];
*/

function interlockGame() {
    var pickedGame = document.getElementById("gameChoice").value;

    switch(pickedGame.toLowerCase()) {
        case "controls" :
            generateInterlock(controls, controlsDescription, controlsStatus);
            break;
        case "dosimetry" :
            generateInterlock(dosimetry, dosimetryDescription, dosimetryStatus);
            break;
        case "outer gantry" :
            generateInterlock(outerGantry, outerGantryDescription, outerGantryStatus);
            break;
        case "hospital" :
            generateInterlock(hospital, hospitalDescription, hospitalStatus);
            break;
        case "ion source" :
            generateInterlock(ionSource, ionSourceDescription, ionSourceStatus);
            break;
        case "magnet" :
            generateInterlock(magnet, magnetDescription, magnetStatus);
            break;
        case "rf" :
            generateInterlock(rf, rfDescription, rfStatus);
            break;
        case "scanning" :
            generateInterlock(scanning, scanningDescription, scanningStatus);
            break;
        case "treatment room" :
            generateInterlock(treatmentRoom, treatmentRoomDescription, treatmentRoomStatus);
            break;
        case "vacuum" :
            generateInterlock(vacuum, vacuumDescription, vacuumStatus);
            break;
        case "cooling" :
            generateInterlock(cooling, coolingDescription, coolingStatus);
            break;
        case "all" :
            generateInterlock(allInterlocks, allInterlocksDescription, allInterlocksStatus);
            break;
                
    }
}

function generateInterlock(x, y, z) {
    var randomNum = Math.floor(Math.random()*x.length);
    document.getElementById("interlockHere").innerHTML = x[randomNum];  
    document.getElementById("descriptionHere").innerHTML = y[randomNum]; 
	document.getElementById("statusHere").innerHTML = "<span style='background-color: yellow;'>" + z[randomNum] + "</span>";
    document.getElementById("descriptionHere").className = "desc";
	document.getElementById("statusHere").className = "status";
   
}

function showDescription() {
    document.getElementById("descriptionHere").className = "show";
	document.getElementById("statusHere").className = "view";
}