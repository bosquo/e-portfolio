/**
 * ============================================================================
 * Florian Herbst — e-Portfolio Main Script & University Data
 * ============================================================================
 * Ordered 1 to 11 matching the exact folder structure in `assets/projects/`:
 * 01. project_1_master_thesis
 * 02. project_2_3D_GIS_with_Unity
 * 03. project_3_HarvardX_CS50
 * 04. project_4_DeepForest_forest_Type_Classification_with_Deep_Learning
 * 05. project_5_Spatial_Data_Infrastructure
 * 06. project_6_CNN
 * 07. project_7_bachelor_thesis
 * 08. project_8_Internship_project_DL_forest_health
 * 09. project_9_Forest_inventory
 * 10. project_10_Forest_education_and_Pedagogy
 * 11. project_11_Forestry_Policy_Discussion
 */

const UNIVERSITY_PROJECTS = [
  // 1. project_1_master_thesis
  {
    id: "master-thesis-3dgs",
    title: "3D Gaussian Splatting for Indoor Geospatial Digital Twins",
    category: "theses",
    typeLabel: "01 · Master's Thesis",
    course: "M.Sc. Applied Geoinformatics · Paris Lodron University of Salzburg (Z_GIS)",
    summary: "Literature review and practical case study evaluating 3D Gaussian Splatting (3DGS) as a 3D reconstruction and real-time rendering technology for an interactive indoor geospatial digital twin of the Z_GIS iDEAS:lab.",
    overview: "Traditional photogrammetry excels at geometric reconstruction and metric accuracy, but often struggles to capture the full radiometric complexity, lighting, and real-time rendering rates required for interactive digital twins. This Master's thesis investigates whether 3D Gaussian Splatting (3DGS) satisfies the six core requirements of an indoor geospatial digital twin: high visual fidelity, metric accuracy, real-time interactivity, simulation capability, live IoT data integration, and geospatial interoperability.",
    methodology: [
      "Data Acquisition & Preprocessing: Captured indoor imagery of the Z_GIS iDEAS:lab using an Insta360 camera, followed by grain removal and automated Python frame extraction and blur-free quality filtering (`extract_frames.py`, `blurr_free_frame_selection.py`).",
      "Georeferenced Photogrammetry & Alignment: Processed images in Agisoft Metashape (SfM alignment, marker detection, GCP coordinate assignment) and executed custom Python scripts (`calculate_shift_vector.py`, `export_colmap_offset.py`, `export_mesh_offset.py`) to compute bounding-box shift vectors and export both a decimated `Mesh.obj` and offset COLMAP camera poses.",
      "Gaussian Splat Training: Trained a 2.5-million Gaussian splat model (`splat.ply`) in LichtFeld Studio using the MRNRF optimizer over 260,000 iterations (16 hours training time, final loss: 0.024).",
      "Unity Digital Twin & ArcGIS Maps SDK Integration: Built the interactive 'Digital Twin iDEAS:lab' in the Unity Engine combining the ArcGIS Maps SDK (basemap, terrain, buildings, and trees layers), the Gsplat-Renderer Plugin, and custom C# scripts (`Map_Manager.cs`, `SenseBoxStreamer.cs`, `RoomPin.cs`, `ThrowPhysicsObjects.cs`) for live SenseBox IoT sensor streaming, first-person navigation, and physics/lighting simulation."
    ],
    results: "Compared to traditional photogrammetry, 3DGS achieved superior visual fidelity without introducing additional metric error. It enabled real-time interactivity, physics-based simulation, and live IoT data integration (mapping sensor values directly to Gaussian properties). While geospatial interoperability remains an ecosystem-level challenge requiring coordinate-offset workarounds, the study demonstrates that 3DGS is a powerful representation technology for geospatial digital twins—especially when combined with photogrammetric meshes.",
    tags: [
      "3D Gaussian Splatting",
      "Digital Twins",
      "Unity & C#",
      "ArcGIS Maps SDK",
      "Agisoft Metashape",
      "LichtFeld Studio",
      "Python",
      "IoT (SenseBox)"
    ],
    image: "assets/projects/project_1_master_thesis/cover.png",
    imageContain: true,
    figures: [
      {
        src: "assets/projects/project_1_master_thesis/cover.png",
        caption: "Conceptual bridge between Physical Twin (Physical Space) and Digital Twin (Virtual Space) via live data and information flows."
      }
    ],
    links: [
      {
        label: "Read Thesis Excerpt & Workflow (PDF)",
        url: "assets/projects/project_1_master_thesis/report.pdf"
      }
    ]
  },

  // 2. project_2_3D_GIS_with_Unity
  {
    id: "unigis-3d-gis-unity",
    title: "3D GIS with Unity — Continuing Education Certificate",
    category: "certificates",
    typeLabel: "02 · University Certificate · Grade: Sehr Gut (1)",
    course: "UNIGIS Salzburg · Paris Lodron University of Salzburg",
    summary: "Specialized 150-hour university module covering real-time 3D engines, C# programming, Esri ArcGIS Maps SDK for Unity, CAD/BIM georeferencing, and live IoT/REST data streaming for geospatial digital twins.",
    overview: "Completed with the highest grade ('Sehr Gut / 1'), this 15-lesson UNIGIS module provided an intensive engineering foundation in real-time 3D geospatial visualization and interactive Digital Twin development using the Unity Engine and the Esri ArcGIS Maps SDK.",
    methodology: [
      "Real-Time 3D & C# Foundations (Lessons 1–5): Digital twin concepts, Unity render pipelines, Visual Studio integration, object-oriented C# programming, and the Unity Game Loop architecture.",
      "Esri ArcGIS Maps SDK & Procedural Scenes (Lessons 6–10): Map Creator workflows, component-based geospatial scenes, and full C# API scripting for basemaps, elevation layers, custom shaders/materials, and interactive camera controllers (Paris & Matterhorn scenes).",
      "CAD & BIM Integration in 3D GIS (Lessons 11–12): Merging 3D Tiles with georeferenced CAD models (Vienna scene) and BIM infrastructure models (Zurich Main Station digital twin) with layer filtering and standalone application builds.",
      "Real-Time Web Services, IoT & Large Dataset Optimization (Lessons 13–15): Consuming RESTful APIs (OpenSky Network live air traffic and GTFS Realtime public transit feeds), object pooling, multi-threading, ArcGIS Geometry Engine spatial filtering, and Scene Layer Packages (SLPK)."
    ],
    results: "Awarded the official UNIGIS Weiterbildungszertifikat (Grade: Sehr Gut / 1) and directly applied these C# and ArcGIS Maps SDK skills to build the interactive indoor/outdoor Digital Twin in my Master's thesis.",
    tags: [
      "Unity 3D",
      "C# & .NET",
      "ArcGIS Maps SDK",
      "3D Tiles & SLPK",
      "BIM / CAD to GIS",
      "Real-Time IoT & REST APIs",
      "UNIGIS Certificate"
    ],
    image: "",
    visualType: "unity-3dgis",
    figures: [],
    links: [
      {
        label: "View Official Certificate (PDF)",
        url: "assets/projects/project_2_3D_GIS_with_Unity/Weiterbildungszertifikat_3D GIS.pdf"
      },
      {
        label: "View Module Syllabus (PDF)",
        url: "assets/projects/project_2_3D_GIS_with_Unity/report.pdf"
      }
    ]
  },

  // 3. project_3_HarvardX_CS50
  {
    id: "harvardx-cs50",
    title: "HarvardX CS50: Introduction to Computer Science",
    category: "certificates",
    typeLabel: "03 · Online Coursework & Certificate",
    course: "Harvard University (edX / HarvardX)",
    summary: "Comprehensive 10-week computer science curriculum covering low-level memory management in C, algorithms, data structures, Python, Artificial Intelligence, relational databases (SQL), and full-stack web development with Flask.",
    overview: "Completed Harvard University's foundational computer science course to build a rigorous software engineering and algorithmic foundation alongside my geoinformatics studies.",
    methodology: [
      "Weeks 1–5 (Systems & Algorithms in C): C programming, arrays, searching and sorting algorithms, asymptotic complexity (Big-O), pointers, dynamic memory allocation, and custom data structures (linked lists, hash tables, tries).",
      "Weeks 6–7 (Python, AI & SQL): Transitioning to high-level Python scripting, search/optimization algorithms in Artificial Intelligence, and relational database design and querying in SQL.",
      "Weeks 8–10 (Web Development & Capstone): Frontend development with HTML, CSS, and JavaScript, backend web application development using Python and Flask, and a final programming project."
    ],
    results: "Strengthened core software development, algorithmic problem-solving, SQL database management, and full-stack web programming skills that underpin my geospatial automation workflows.",
    tags: [
      "C",
      "Python",
      "Algorithms & Data Structures",
      "SQL",
      "HTML / CSS / JS",
      "Flask",
      "Computer Science"
    ],
    image: "",
    visualType: "cs50-code",
    figures: [],
    links: [
      {
        label: "View Course Curriculum Overview (PDF)",
        url: "assets/projects/project_3_HarvardX_CS50/report.pdf"
      }
    ]
  },

  // 4. project_4_DeepForest_forest_Type_Classification_with_Deep_Learning
  {
    id: "deepforest-unet",
    title: "DeepForest: Classifying Deciduous and Coniferous Forests with Deep Learning",
    category: "projects",
    typeLabel: "04 · University Research Project",
    course: "I3 Project: Interdisciplinary | Integrated | Interactive · M.Sc. Applied Geoinformatics (Z_GIS)",
    summary: "Semantic segmentation of deciduous and coniferous forest stands in the Ebersberger Forst (Bavaria) using a lightweight U-Net Convolutional Neural Network and freely available Sentinel-2 imagery.",
    overview: "Climate change and extreme weather events increasingly threaten Central European woodland stability. Knowing the exact spatial distribution and mixture of deciduous versus coniferous trees is vital for forest management, pathogen risk assessment, and silvicultural subsidy allocation. This project developed a reproducible, open-data deep learning framework capable of classifying dominant leaf types from medium-resolution satellite imagery using lightweight computational resources.",
    methodology: [
      "Data Acquisition via Google Earth Engine: Extracted cloud-free Sentinel-2 Level-2A multispectral imagery over the 90 km² Ebersberger Forst (Bavaria, Germany) and resampled 11 spectral bands (B2–B8A, B9, B11, B12) to a uniform 10 m resolution alongside NDVI and NDWI vegetation indices.",
      "Automated Labeling & Patching Pipeline: Retrieved reference dominant leaf type labels via REST API from the Copernicus Land Monitoring Service (High-Resolution Forest Layers). Automated reprojection, alignment, clipping, and non-overlapping image patching in Python (`Rasterio`, `GDAL`, `NumPy`) with a 70% training, 15% validation, and 15% testing split.",
      "Lightweight U-Net Architecture: Designed a symmetrical encoder-decoder U-Net in TensorFlow/Keras featuring 7 lightweight convolutional blocks, 3 max-pooling layers, 3 upsampling layers with skip connections, batch normalization, dropout, and learning-rate scheduling.",
      "Evaluation & Generalization Testing: Assessed pixel-level semantic segmentation across three classes (deciduous, coniferous, no forest) using confusion matrices and tested spatial generalization on unseen forest regions in the Black Forest (Schwarzwald)."
    ],
    results: "The lightweight U-Net achieved an overall classification accuracy of ~93% on the Ebersberger Forst test set, with ~97% recall for coniferous forest, ~97% recall for non-forest, and ~86% recall for deciduous forest—matching established benchmarks (~90%) while relying exclusively on free Sentinel-2 data and accessible cloud GPU resources.",
    tags: [
      "Deep Learning (U-Net)",
      "TensorFlow & Keras",
      "Sentinel-2",
      "Google Earth Engine",
      "Python (Rasterio/GDAL)",
      "Copernicus HRL",
      "QGIS"
    ],
    image: "assets/projects/project_4_DeepForest_forest_Type_Classification_with_Deep_Learning/poster.png",
    imageContain: true,
    figures: [
      {
        src: "assets/projects/project_4_DeepForest_forest_Type_Classification_with_Deep_Learning/poster.png",
        caption: "Project Poster: DeepForest U-Net architecture, training history, semantic segmentation maps, and confusion matrix."
      }
    ],
    links: [
      {
        label: "Read Full Paper (PDF)",
        url: "assets/projects/project_4_DeepForest_forest_Type_Classification_with_Deep_Learning/report.pdf"
      },
      {
        label: "View High-Res Poster (PNG)",
        url: "assets/projects/project_4_DeepForest_forest_Type_Classification_with_Deep_Learning/poster.png"
      }
    ]
  },

  // 5. project_5_Spatial_Data_Infrastructure
  {
    id: "gepaus-sdi",
    title: "GEPAUS: Spatial Data Infrastructure & Interactive STEM Gender Evaluation Dashboard",
    category: "projects",
    typeLabel: "05 · SDI & WebGIS Project",
    course: "IP: Spatial Data Infrastructure (SDI) Services Implementation · WT 2024/25 (Z_GIS)",
    summary: "End-to-end open-source Spatial Data Infrastructure (PostgreSQL/PostGIS, GeoServer, GeoNetwork) and interactive web dashboard analyzing gender distribution across STEM fields at 12 public Austrian universities over two decades.",
    overview: "Developed as part of the Digital Navigator initiative in collaboration with the Z_GIS iDEAS:lab, the Austrian Federal Chancellery (Bundeskanzleramt), and LEA ('Let's Empower Austria'), GEPAUS investigates the development of the gender gap in STEM education across 12 major Austrian universities (2003, 2013, and 2023) and communicates the findings to young students through an engaging, standards-compliant WebGIS dashboard.",
    methodology: [
      "Data Discovery & Automated Python Cleaning: Retrieved multi-decadal enrollment statistics across seven STEM disciplines from Statistics Austria (STATcube) and geocoded university campuses using OpenStreetMap coordinates. Wrote a Python pipeline to clean unstructured spreadsheets and export structured SQLite/relational tables.",
      "PostGIS Database Architecture: Designed a PostgreSQL/PostGIS database (`gepaus_geometries` and attribute tables) using SQL views for the 2003/04, 2013/14, and 2023/24 winter semesters to eliminate redundancy and dynamically pivot male/female student counts per discipline.",
      "OGC Web Services & ISO Metadata: Published the semester views as OGC-compliant Web Feature Services (WFS, GeoJSON output) and Web Map Services (WMS) via GeoServer, and cataloged ISO 19139 compliant metadata in the Z_GIS GeoNetwork.",
      "Frontend WebGIS Dashboard: Built a responsive static web application (hosted on GitHub Pages) using Leaflet, Chart.js, and Fetch/AJAX requests that dynamically queries GeoServer WFS layers and pairs interactive charts with social-media-inspired motivational cards."
    ],
    results: "Delivered a complete, interoperable open-source SDI and a desktop/mobile-ready public dashboard (`nikolovayana.github.io/gepaus_sdi`) ready for educational outreach workshops at the Z_GIS iDEAS:lab.",
    tags: [
      "PostgreSQL / PostGIS",
      "GeoServer (WFS/WMS)",
      "GeoNetwork (ISO 19139)",
      "Leaflet & Chart.js",
      "Python",
      "QGIS",
      "GitHub Pages"
    ],
    image: "assets/projects/project_5_Spatial_Data_Infrastructure/cover.png",
    imageContain: true,
    figures: [
      {
        src: "assets/projects/project_5_Spatial_Data_Infrastructure/SDI.png",
        caption: "GEPAUS Spatial Data Infrastructure (SDI) architecture connecting PostGIS, GeoServer OGC services, Leaflet/Chart.js, and GitHub Pages."
      },
      {
        src: "assets/projects/project_5_Spatial_Data_Infrastructure/workplan.png",
        caption: "Work Breakdown Structure across the five work packages (Project Management, Data Discovery, Data Preparation, Service Creation, Data Sharing)."
      }
    ],
    links: [
      {
        label: "Open Live GEPAUS Dashboard",
        url: "https://nikolovayana.github.io/gepaus_sdi/index.html"
      },
      {
        label: "Read Final Project Report (PDF)",
        url: "assets/projects/project_5_Spatial_Data_Infrastructure/report.pdf"
      }
    ]
  },

  // 6. project_6_CNN
  {
    id: "cow-neural-network",
    title: "Cow Neural Network: Predicting Livestock Movement Using 1D CNNs on Vector GPS Trajectories",
    category: "projects",
    typeLabel: "06 · GeoAI Research Paper",
    course: "Applied Geoinformatics Research Paper · June 2025",
    summary: "Investigating the feasibility and limitations of 1D Convolutional Neural Networks trained directly on sequential vector GPS trajectories (without rasterization) to forecast alpine cattle movement at Vierkaseralm, Untersberg.",
    overview: "Precision livestock farming and sustainable alpine pasture management increasingly rely on GPS tracking to mitigate land-use conflicts with tourism and large carnivores. While CNNs are widely used in trajectory prediction by converting coordinates into rasterized heatmaps, rasterization generalizes spatial precision. This study explored whether a pure 1D Convolutional Neural Network can learn movement patterns directly from vector GPS sequences.",
    methodology: [
      "Case Study & Sensor Dataset: Analyzed real-world GPS collar trajectory data collected from cattle grazing on the Vierkaseralm alpine pasture at Untersberg, Austria.",
      "Vector Sequence Engineering: Segmented raw point trajectories (latitude, longitude, timestamp, speed, and course) into overlapping sliding-window sequences of 10 input time steps (`X1–X10`) and 10 forecasted target steps (`Y1–Y10`), split into 70% training, 15% validation, and 15% test sets.",
      "1D CNN Architecture & Hyperparameter Tuning: Designed and tested multiple 1D CNN architectures (kernel size 3, stride 1, learning rate scheduler, early dropout) trained directly on the continuous vector arrays without recurrent (LSTM) layers."
    ],
    results: "Simpler, shallower 1D CNN architectures generalized better than deep networks on local grazing movements, reaching a minimum MSE of 0.44, MAE of 0.40, and an average spatial prediction discrepancy of ~100 m (ranging from 30 m to 200 m) over 10-step horizons. The study critically demonstrated that pure CNNs capture short-term directional trends but lack the temporal memory required for irregular, long-term animal trajectories—highlighting why hybrid CNN-LSTM architectures and herd-level data are essential for vector movement forecasting.",
    tags: [
      "1D CNN",
      "Trajectory Prediction",
      "Vector Deep Learning",
      "GPS Telemetry",
      "Python",
      "Alpine Pasture Management"
    ],
    image: "",
    visualType: "trajectory-cnn",
    figures: [],
    links: [
      {
        label: "Read Research Paper (PDF)",
        url: "assets/projects/project_6_CNN/report.pdf"
      }
    ]
  },

  // 7. project_7_bachelor_thesis
  {
    id: "bachelor-thesis-inventory",
    title: "Evaluation and Comparison of Modern Forest Inventory Methods",
    category: "theses",
    typeLabel: "07 · Bachelor's Thesis",
    course: "B.Eng. Forestry Engineering · Hochschule Weihenstephan-Triesdorf (HSWT) · July 2023",
    summary: "Comprehensive technical synthesis and qualitative market study comparing Airborne Laser Scanning (ALS), Digital Aerial Photogrammetry (DAP), Terrestrial Laser Scanning (TLS), UAVs, and optical/SAR satellites for operational forest inventories.",
    overview: "Supervised by Prof. Dr. Ewald Endres at the Faculty of Forestry (HSWT Freising), this Bachelor's thesis addresses a core challenge in modern forestry: conventional field-based national forest inventories operate on 10-year cycles and cannot react rapidly to climate-induced disturbances such as drought, windthrow, and bark beetle outbreaks. The thesis evaluates spaceborne and airborne remote sensing platforms and conducts an empirical market study with commercial remote sensing inventory providers.",
    methodology: [
      "Multi-Platform & Sensor Evaluation: Compared spatial resolution, revisit rates, and costs (€/km² and €/ha) across optical/SAR satellites (Sentinel-1/2, Landsat, WorldView, PlanetScope), Manned Aerial Vehicles (MAVs), and multirotor/fixed-wing UAVs.",
      "3D Point Cloud & Spectral Technology Review: Assessed Airborne Laser Scanning (ALS), Digital Aerial Photogrammetry (DAP / SfM), Very-High-Resolution (VHSR) optical imagery, and Terrestrial/Mobile Laser Scanning (RIEGL TLS & iPhone LiDAR) for deriving tree height, DBH, basal area, timber volume, and species classification (%RMSE comparison).",
      "Qualitative Industry Market Study: Designed a semi-standardized interview guideline and conducted expert interviews with CEOs and specialists from six European remote sensing forest inventory companies, evaluated using Mayring's qualitative content analysis."
    ],
    results: "Developed a practical, cost-optimized operational inventory framework: (1) an initial manned-aircraft ALS acquisition on a 10-year cycle to establish a high-precision Digital Terrain Model (DTM) and vertical sub-canopy structure; (2) cost-effective inventory updates every 2–5 years using Digital Aerial Photogrammetry (DAP, at ~50% of ALS cost); (3) continuous large-scale change and vitality monitoring via free Sentinel-2 imagery supplemented by targeted multi-/hyperspectral UAV flights; and (4) leveraging forestry associations to make remote sensing inventories economically viable for small private forest owners (scaling costs from ~50 €/ha down to 5–30 €/ha).",
    tags: [
      "Forest Inventory",
      "ALS LiDAR",
      "Digital Aerial Photogrammetry (DAP)",
      "UAV & Satellite EO",
      "Market Study",
      "Forestry Engineering"
    ],
    image: "",
    visualType: "forestry-inventory",
    figures: [],
    links: [
      {
        label: "Read Full Bachelor's Thesis (PDF)",
        url: "assets/projects/project_7_bachelor_thesis/Bachelorarthesis.pdf"
      }
    ]
  },

  // 8. project_8_Internship_project_DL_forest_health
  {
    id: "internship-woodsapp-forest-health",
    title: "Validation of AI-Based Satellite Forest Vitality Signals (WoodsApp)",
    category: "projects",
    typeLabel: "08 · Practical Internship Project",
    course: "B.Eng. Forestry Engineering (HSWT) & BitApps GmbH (Erding)",
    summary: "Field and UAV (drone) verification of satellite-derived AI forest vitality alerts in the Ebersberger Forst using BitApps' WoodsApp to detect early-stage insect infestations and train the self-learning AI model.",
    overview: "Carried out in cooperation with BitApps GmbH (a subsidiary of the Finnish forestry software company Bitcomp Oy), this project investigated the operational accuracy of 'WoodsApp'—a web and mobile GIS application for private forest owners that uses artificial intelligence and multispectral satellite imagery to detect early crown vitality anomalies caused by bark beetles and other forest pests.",
    methodology: [
      "AI Vitality Signal Extraction: Analyzed polygon-based vitality alerts generated by WoodsApp across the Ebersberger Forst, where an AI model evaluates spectral reflectance changes in satellite imagery against historical baselines.",
      "Terrestrial & UAV Aerial Verification: Because early-stage crown damage from six-toothed spruce bark beetles (Kupferstecher) or spruce web-spinning sawflies (Fichtenblattwespe) begins in the upper sun-exposed canopy and is frequently invisible from the forest floor, terrestrial inspections were combined with systematic UAV (drone) flights above the canopy throughout August.",
      "Active AI Feedback Loop: Recorded binary field and aerial validation results directly within the WoodsApp feedback interface so the automated machine-learning pipeline could refine future vitality classifications."
    ],
    results: "High-resolution UAV imagery confirmed widespread upper-crown discoloration and needle loss caused by spruce sawfly infestation across the flagged stands, proving that the majority of the AI-generated vitality signals were accurate while identifying opportunities to sharpen polygon boundary delineation.",
    tags: [
      "GeoAI & Forest Health",
      "Multispectral Satellite EO",
      "UAV / Drone Inspection",
      "WoodsApp (Mobile GIS)",
      "Model Validation",
      "Forest Protection"
    ],
    image: "assets/projects/project_8_Internship_project_DL_forest_health/poster.png",
    imageContain: true,
    figures: [
      {
        src: "assets/projects/project_8_Internship_project_DL_forest_health/poster.png",
        caption: "Project Poster: Validation of AI-based satellite forest vitality alerts in the Ebersberger Forst using UAV aerial inspection and WoodsApp."
      }
    ],
    links: [
      {
        label: "View Project Poster (PDF)",
        url: "assets/projects/project_8_Internship_project_DL_forest_health/Poster.pdf"
      },
      {
        label: "View High-Res Poster (PNG)",
        url: "assets/projects/project_8_Internship_project_DL_forest_health/poster.png"
      }
    ]
  },

  // 9. project_9_Forest_inventory
  {
    id: "forest-management-planning-inventory",
    title: "Forest Management Planning & Multi-Method Operational Inventory",
    category: "projects",
    typeLabel: "09 · Capstone Forestry Project",
    course: "7th Semester Studienarbeit Forstbetriebsplanung · B.Eng. Forestry Engineering (HSWT)",
    summary: "Complete 10-year forest management plan (Forsteinrichtung), QGIS stand mapping, and R-based statistical timber inventory for a 12.55 ha private forest estate in Straßlach-Dingharting, Bavaria.",
    overview: "Supervised by Prof. Dr. Andreas Rothe at HSWT, this comprehensive 61-page forest management plan (Betriebsgutachten) developed a 10-year operational and silvicultural strategy for a fragmented 12.55 ha private forest estate (Districts I Leiten, II Wiese, and III Dinghartinger Holz) situated across steep Nagelfluh slopes and moraine sites in the Munich gravel plain.",
    methodology: [
      "GIS Stand Delineation & Mapping: Digitized property boundaries, relief, site units, and 9 silvicultural management stands in QGIS using official Bavarian cadastral layers, digital orthophotos, and terrain shading.",
      "Multi-Method Terrestrial Inventory: Executed tailored mensuration methods per stand type—full tree calipering (Vollkluppung) in mature and steep ravine stands, 12 fixed-radius permanent sample plots (452 m², slope-corrected 12 m radius) in young mixed stands, and angle-count relascope sampling in homogeneous spruce stands, paired with Vertex IV height measurements, regeneration/browsing surveys, and deadwood/habitat tree mapping.",
      "Statistical Evaluation in R: Processed all inventory data in R using the `rBDAT` library, fitted stand height curves, calculated species proportions via Laer-Spieker tables, and derived current increments and yield classes using Assmann-Franz and Wiedemann yield tables.",
      "Silvicultural & Natura 2000 Planning: Formulated stand-by-stand conversion measures, a 10-year sustainable harvest cut (Hiebsatz), FFH habitat conservation measures (Type 9180* ravine forests), and Bavarian forestry subsidy calculations (WALDFÖPR & VNP Wald)."
    ],
    results: "Quantified a total standing timber volume of 4,117 Efm o.R. (363 Efm/ha; 66% spruce, 30% broadleaves) and a current annual increment of 106 Efm/year (9.3 Efm/ha/year). Established a sustainable 10-year harvest plan of 80 Efm/year (792 Efm total) focused on converting pure spruce stands into climate-resilient mixed forests with silver fir, beech, and sycamore maple while preserving 33.4 m³/ha of ecological deadwood in the FFH conservation area.",
    tags: [
      "Forest Inventory",
      "QGIS Cartography",
      "R (rBDAT)",
      "Silvicultural Planning",
      "Vertex IV & Relascope",
      "Natura 2000 / FFH"
    ],
    image: "",
    visualType: "forest-planning-gis",
    figures: [],
    links: [
      {
        label: "Read Full Management Plan & Inventory Report (PDF)",
        url: "assets/projects/project_9_Forest_inventory/report.pdf"
      }
    ]
  },

  // 10. project_10_Forest_education_and_Pedagogy
  {
    id: "forest-education-pedagogy",
    title: "Forest Education and Pedagogy (Waldpädagogik)",
    category: "projects",
    typeLabel: "10 · Forestry Course Project",
    course: "B.Eng. Forestry Engineering · Hochschule Weihenstephan-Triesdorf (HSWT)",
    summary: "Conception and practical implementation of experiential forest education and environmental pedagogy programs communicating forest ecology, sustainable forestry, and biodiversity to public audiences.",
    overview: "Forest education (Waldpädagogik) bridges scientific forest management and society by translating complex ecological processes, silvicultural practices, and conservation goals into interactive outdoor learning experiences.",
    methodology: [
      "Didactic Concept Design: Structured age-appropriate learning modules, sensory activities, and guided forest excursions centered on forest ecosystem functions, tree species ecology, and sustainable timber use.",
      "Experiential Learning & Communication: Applied hands-on environmental pedagogy methods to foster ecological awareness and transparent communication between forestry professionals and the public."
    ],
    results: "Developed practical educational skills that directly support my later outreach and teaching work at the University of Salzburg (Z_GIS iDEAS:lab and UNIGIS Salzburg).",
    tags: [
      "Forest Pedagogy",
      "Science Communication",
      "Environmental Education",
      "Forest Ecology",
      "Outreach"
    ],
    image: "",
    visualType: "forest-pedagogy",
    figures: [],
    links: []
  },

  // 11. project_11_Forestry_Policy_Discussion
  {
    id: "forestry-policy-wolf-alpine",
    title: "Forest & Alpine Policy Analysis: Return of the Wolf & Alpine Pasture Management",
    category: "projects",
    typeLabel: "11 · Forest Policy Study",
    course: "Forstpolitische Podiumsdiskussion · B.Eng. Forestry Engineering (HSWT)",
    summary: "Comprehensive policy, legal, and socio-ecological analysis of the return of the wolf (Canis lupus) to the Alpine region and its impacts on alpine pasture farming, herd protection, tourism, and wildlife management.",
    overview: "Titled 'Kommt der Wolf, geht die Alm?', this forest and wildlife policy study examines the multifaceted land-use conflict triggered by the natural recolonization of the European wolf across Central Europe and the Bavarian Alps, weighing strict species conservation mandates against traditional alpine pasture farming (Almwirtschaft).",
    methodology: [
      "Herd Protection & Topographical Feasibility Analysis: Evaluated technical, financial, and topographical limits of electric livestock fencing, livestock guardian dogs (Herdenschutzhunde), llamas/alpacas, and permanent shepherding across steep, small-structured Bavarian alpine pastures (~1,400 alps and 51,000 grazing cattle).",
      "Policy & Legal Framework Evaluation: Analyzed the Bavarian Action Plan Wolf (Stages 1–3), the Large Carnivore Compensation Fund (Ausgleichsfonds Große Beutegreifer), the Alpine Pasture Protection Commission (Weideschutzkommission), and EU Habitats Directive (FFH Annex IV) derogation criteria.",
      "International Comparative Case Studies: Contrasted Bavarian policy with Swiss federal wolf management (BAFU, Berne Convention revision requests) and empirical coexistence research from the Carpathian Mountains in Romania (Peter Sürth)."
    ],
    results: "Demonstrated that while technical herd protection is effective in flat terrain, steep alpine relief, high tourism density, and small herd sizes create severe operational and economic constraints on mountain pastures—requiring pragmatic wildlife management, zoning of unprotectable alpine pastures, and objective stakeholder dialogue.",
    tags: [
      "Forest & Wildlife Policy",
      "Alpine Pasture Management",
      "Stakeholder Conflict Analysis",
      "EU Habitats Directive (FFH)",
      "Biodiversity & Land Use"
    ],
    image: "",
    visualType: "wolf-policy",
    figures: [],
    links: [
      {
        label: "Read Full Policy Paper (PDF)",
        url: "assets/projects/project_11_Forestry_Policy_Discussion/report.pdf"
      }
    ]
  }
];

/* Clean SVG cover graphics for items without a dedicated PNG cover */
function getCustomCoverSVG(visualType) {
  switch (visualType) {
    case "trajectory-cnn":
      return `
        <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="180" fill="#EBF2EE"/>
          <path d="M35 135 Q110 45 195 95 T355 50" fill="none" stroke="#2D6A4F" stroke-width="3"/>
          <path d="M195 95 Q265 130 345 85" fill="none" stroke="#A65E2E" stroke-width="2.5" stroke-dasharray="6 4"/>
          <circle cx="35" cy="135" r="5" fill="#1B4332"/>
          <circle cx="115" cy="78" r="5" fill="#1B4332"/>
          <circle cx="195" cy="95" r="6" fill="#1B4332"/>
          <circle cx="355" cy="50" r="5" fill="#2D6A4F"/>
          <circle cx="345" cy="85" r="5" fill="#A65E2E"/>
          <text x="24" y="34" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#48584F">1D CNN · GPS TRAJECTORY FORECASTING</text>
        </svg>`;
    case "forestry-inventory":
      return `
        <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="180" fill="#E7F1EC"/>
          <polygon points="105,48 68,145 142,145" fill="#74A88E"/>
          <polygon points="195,30 148,145 242,145" fill="#2D6A4F"/>
          <polygon points="285,54 246,145 324,145" fill="#528A6E"/>
          <line x1="40" y1="145" x2="360" y2="145" stroke="#1B4332" stroke-width="2"/>
          <text x="24" y="32" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#1B4332">ALS · DAP · UAV · FOREST INVENTORY</text>
        </svg>`;
    case "unity-3dgis":
      return `
        <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="180" fill="#EAEFE9"/>
          <polygon points="200,32 300,72 200,112 100,72" fill="#84B59C"/>
          <polygon points="100,72 200,112 200,152 100,112" fill="#2D6A4F"/>
          <polygon points="300,72 200,112 200,152 300,112" fill="#1B4332"/>
          <text x="24" y="32" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#1B4332">UNIGIS · 3D GIS WITH UNITY</text>
        </svg>`;
    case "cs50-code":
      return `
        <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="180" fill="#F2EFE9"/>
          <rect x="40" y="38" width="320" height="106" rx="8" fill="#1C2822"/>
          <text x="62" y="74" font-family="monospace" font-size="13" fill="#84B59C">$ clang -o geoinfo main.c</text>
          <text x="62" y="98" font-family="monospace" font-size="13" fill="#E7F1EC">C · Python · SQL · AI · Flask</text>
          <text x="62" y="122" font-family="monospace" font-size="12" fill="#D9A066">HarvardX CS50</text>
        </svg>`;
    case "forest-planning-gis":
      return `
        <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="180" fill="#E9F2EC"/>
          <polygon points="55,140 95,60 190,48 245,95 180,148" fill="#74A88E" stroke="#1B4332" stroke-width="2"/>
          <polygon points="190,48 315,58 345,132 245,95" fill="#2D6A4F" stroke="#1B4332" stroke-width="2"/>
          <circle cx="135" cy="98" r="4" fill="#FFFFFF"/>
          <circle cx="175" cy="82" r="4" fill="#FFFFFF"/>
          <circle cx="275" cy="88" r="4" fill="#FFFFFF"/>
          <text x="24" y="32" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#1B4332">QGIS &amp; R · FOREST MANAGEMENT PLANNING</text>
        </svg>`;
    case "forest-pedagogy":
      return `
        <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="180" fill="#EFECE4"/>
          <circle cx="200" cy="96" r="46" fill="#74A88E"/>
          <path d="M200 62 L200 148 M200 95 L178 78 M200 108 L224 88" stroke="#1B4332" stroke-width="3" stroke-linecap="round"/>
          <text x="24" y="32" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#1B4332">FOREST EDUCATION &amp; PEDAGOGY</text>
        </svg>`;
    case "wolf-policy":
      return `
        <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="180" fill="#EAEEEB"/>
          <polygon points="40,148 135,58 220,148" fill="#84B59C"/>
          <polygon points="150,148 255,42 360,148" fill="#2D6A4F"/>
          <polygon points="255,42 225,78 285,78" fill="#FFFFFF" opacity="0.85"/>
          <line x1="30" y1="148" x2="370" y2="148" stroke="#1B4332" stroke-width="2"/>
          <text x="24" y="32" font-family="Inter, sans-serif" font-size="11" font-weight="600" fill="#1B4332">ALPINE PASTURES &amp; WILDLIFE POLICY</text>
        </svg>`;
    default:
      return `
        <svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
          <rect width="400" height="180" fill="#E7F1EC"/>
        </svg>`;
  }
}

/* ============================================================================
   Initialize Page
   ============================================================================ */
document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  initModal();

  // Render full University Grid if on university.html
  const universityGrid = document.getElementById("university-grid");
  if (universityGrid) {
    renderUniversityCards("all", "university-grid");
    initFilters();
  }

  const yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});

function renderUniversityCards(filter, containerId) {
  const grid = document.getElementById(containerId);
  if (!grid) return;

  let items = UNIVERSITY_PROJECTS;
  if (filter !== "all") {
    items = UNIVERSITY_PROJECTS.filter((p) => p.category === filter);
  }

  grid.innerHTML = items
    .map(
      (p) => `
      <article class="project-card" onclick="openProjectModal('${p.id}')" tabindex="0" role="button" aria-label="Read details for ${p.title}">
        <div class="project-thumb">
          ${
            p.image
              ? `<img src="${p.image}" alt="${p.title}" class="${p.imageContain ? "contain-img" : ""}" loading="lazy" />`
              : getCustomCoverSVG(p.visualType)
          }
        </div>
        <div class="project-body">
          <span class="project-type">${p.typeLabel}</span>
          <span class="project-course-meta">${p.course}</span>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.summary}</p>
          <div class="project-tags">
            ${p.tags.slice(0, 5).map((t) => `<span class="tag">${t}</span>`).join("")}
          </div>
          <div class="project-card-footer">
            <span>Read Methodology &amp; Results</span>
            <span>→</span>
          </div>
        </div>
      </article>
    `
    )
    .join("");

  grid.querySelectorAll(".project-card").forEach((card, idx) => {
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openProjectModal(items[idx].id);
      }
    });
  });
}

function initFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.getAttribute("data-filter") || "all";
      renderUniversityCards(filter, "university-grid");
    });
  });
}

function openProjectModal(id) {
  const p = UNIVERSITY_PROJECTS.find((item) => item.id === id);
  const modal = document.getElementById("project-modal");
  const content = document.getElementById("modal-content");
  if (!p || !modal || !content) return;

  const figuresHtml =
    p.figures && p.figures.length > 0
      ? `
      <div class="modal-section-label">Figures &amp; Visuals</div>
      <div class="modal-figures">
        ${p.figures
          .map(
            (f) => `
          <div class="modal-figure-item">
            <a href="${f.src}" target="_blank" rel="noopener noreferrer" title="Click to open full size">
              <img src="${f.src}" alt="${f.caption}" />
            </a>
            <div class="modal-figure-caption">${f.caption}</div>
          </div>
        `
          )
          .join("")}
      </div>
    `
      : "";

  const linksHtml =
    p.links && p.links.length > 0
      ? `
      <div class="modal-actions">
        ${p.links
          .map(
            (l, i) => `
          <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="btn ${i === 0 ? "btn-primary" : "btn-secondary"} btn-sm">
            ${l.label} ↗
          </a>
        `
          )
          .join("")}
      </div>
    `
      : "";

  content.innerHTML = `
    <span class="project-type">${p.typeLabel}</span>
    <div class="project-course-meta" style="margin-bottom: 0.35rem;">${p.course}</div>
    <h2 style="margin: 0 0 1rem; font-size: 1.55rem;">${p.title}</h2>
    <p style="color: var(--text-secondary); margin-bottom: 1rem;">${p.overview}</p>

    <div class="modal-section-label">Methodology &amp; Implementation</div>
    <ul class="modal-list">
      ${p.methodology.map((m) => `<li>${m}</li>`).join("")}
    </ul>

    <div class="modal-section-label">Key Results &amp; Conclusions</div>
    <p style="color: var(--text-secondary); font-size: 0.94rem;">${p.results}</p>

    <div class="modal-section-label">Tools &amp; Technologies</div>
    <div class="project-tags">
      ${p.tags.map((t) => `<span class="tag">${t}</span>`).join("")}
    </div>

    ${figuresHtml}
    ${linksHtml}
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function initModal() {
  const modal = document.getElementById("project-modal");
  const closeBtn = document.getElementById("modal-close-btn");

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeModal();
    });
  }
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

function initMobileNav() {
  const btn = document.getElementById("mobile-menu-btn");
  const nav = document.getElementById("main-nav");
  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", String(isOpen));
  });
}
