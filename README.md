De bloomfield process code

<!-- ensure versions are  compatible versions -->
node -v
npm -v

<!-- create nextjs project -->
npx create-next-app@latest debloomfield

<!-- run website -->
npm run dev

<!-- start updating app -->
set global css
set layout

<!-- create component folder in app to create reusable files -->
Header
Hero
Capabilitystrip
ServicesSection
<!-- install react icons -->
npm install lucide-react
npm install react-icons
AboutPreview
Whychooseus
HowitWorks
PartnershipSection
Footer

<!-- create pages -->
about->page
services->page
industries->page
contact->page
request-service->page

<!-- make mail handling functional -->
npm install nodemailer
<!-- create  -->
app->api>contact->route.ts
.env.local - for store mail setup details
gmail app password using 2-factor authentication
create contact form & request service form

<!-- create each services page -->
general-contracting
logistics-moving
supplies-general-services
shipping-equipment
real-estate
solar-energy

<!-- update request service form -->
by using searchParams 

<!-- deployment -->
npm run build
git status
git add .
git commit -m ""
git push origin main