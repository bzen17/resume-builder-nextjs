## Resume Builder (Next.js)
> Create, style and host your own HTML Resume onto the web simply by filling a form.

### Features

- [x] Sectional form to fill resume information
- [x] Progress bar to show progress of resume creation
- [x] Resume preview
- [x] Steps to download and host resume
- [ ] Automate HTML resume hosting
- [ ] Download resume as PDF
- [ ] Import and export resume

### Installation

Local installation:

```bash
    npm install
```

To run the project locally after installation execute `npm run dev`

### Pages

 - **Home (Form to fill resume information)** [Path: /] 
    - **`Sections`**
        - ==Bio==
        <img src="./src/formSections/Bio.png" alt="Bio" width="800"/>
        - ==Experience==
        <img src="./src/formSections/Exp.png" alt="Exp" width="800"/>
        - ==Skills==
        <img src="./src/formSections/Skills.png" alt="Skills" width="800"/>
        - ==Certifications==
        <img src="./src/formSections/Cert.png" alt="Cert" width="800"/>
        - ==Contact==
        <img src="./src/formSections/Contact.png" alt="Contact" width="800"/>
    - **`Error Handling`**
    <img src="./src/formError.png" alt="formError" width="800"/>
    - **`Submit`** (On click of ==Generate== button)
    <img src="./src/formSubmit.png" alt="formSubmit" width="400"/>
 - **Preview (Previews resume with any sections filled)** [Path: /preview] 
 - **Generate (Previews resume with all sections filled)** [Path: /generate] 
