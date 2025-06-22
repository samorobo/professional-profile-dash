# Next.js 14 CarePulse

![Project Screenshot](https://github.com/ladunjexa/nextjs14-carepulse/blob/main/public/assets/mockup.png)

## 🌐 Live Demo
Explore the live demonstration of the project: [Professional_profile_dashboard_On_Netlify](https://elaborate-sopapillas-ca528e.netlify.app/)

## 📝 Professional Profile Dashboard
A responsive Professional Profile Dashboard built with Next.js, React, TypeScript, and Tailwind CSS. This application showcases a professional artist's profile with experience management, tabbed navigation, and detailed program information.


## 🛠️ Tech Stack
CarePulse is built using:
- **Framework**: Next.js 13.3.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.3.3
- **Data Fetching**: Native fetch with getServerSideProps
- **Icons**: Lucide React 0.263.1


### 🚀 Features
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile device.
- **Interactive Experience Cards:**: Click on experience cards to view detailed information
- **Tabbed Navigation**: Filter experiences by category (Training, Performance, etc.)
- **Collapsible Sidebar**: Space-efficient navigation with icon-based menu
- **Dynamic Detail Panel**: Sliding detail panel with comprehensive program information
- **Professional UI**: Clean, modern design matching the provided wireframe

1. **Clone Repository**:
    ```bash
    git clone https://github.com/samorobo/professional-profile-dash.git
    ```
2. **Install Dependencies**:
    ```bash
    cd professional-profile-dash
    npm install
    ```
3. **Run Development Server**:
    ```bash
    npm run dev
    ```
4. **Open**: Visit [http://localhost:3000](http://localhost:3000) in your browser.


## 🔧 API Integration
The application fetches data from two mock APIs:

- **User Data**: https://jsonplaceholder.typicode.com/users/1
    - **Used** for profile information (name, address, contact details)


- **Posts Data**: https://jsonplaceholder.typicode.com/posts?userId=1
      - **Transformed** into experience cards and program details

## 📱 Responsive Design

- **Desktop**: Full layout with sidebar and detail panel
- **Tablet**: Adapted layout with collapsible elements
- **Mobile**: Stacked layout with optimized touch interactions

## 🎨 Key Components
### Dashboard Component (pages/index.tsx)

- **Main** container component
- **Handles** state management for tabs and selected cards
- **Implements** responsive layout logic
- **Manages** API data integration

### ExperienceCard Component (components/ExperienceCard.tsx)

- **Reusable** card component for displaying experience items
- **Handles** click events for detail panel
- **Responsive** design with proper truncation

### Layout Component (components/Layout.tsx)

- **Provides** consistent page structure
- **Manages** SEO meta tags
- **Handles** global layout concerns

## 🚀 Deployment

### Deploy to Production (Manual)
You can create an optimized production build with the following command:
```bash
npm run build
npm run start
```

### Deploy to Netlify

1.  Build the project: ```npm run build```
2.  Deploy the out folder to ```Netlify```
3. Configure build settings:
    - **Build** command:``` npm run build```
  - **Publish** directory: ```.next```

## Environment Variables
No environment variables required for this project as it uses public APIs.
### 🔍 Code Quality

- **TypeScript**: Full type safety throughout the application
- **ESLint**: Code linting with Next.js recommended rules
- **Clean Architecture**: Separation of concerns with reusable components
- **Performance**: Optimized with Next.js SSR and efficient re-renders

## 📊 Performance Features

- **Server-side** rendering for faster initial page loads
- **Optimized** images and icons
- **Efficient** state management
- **Minimal** bundle size with tree-shaking

## 🤝 Contributing

1. **Fork** the repository
2. **Create** a feature branch ```(git checkout -b feature/amazing-feature)```
3. **Commit** your changes ```(git commit -m 'Add some amazing feature')```
4. **Push** to the branch ```(git push origin feature/amazing-feature)```
5. **Open** a Pull Request

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Design** inspiration from the provided wireframe
- **JSONPlaceholder** for mock API data
- **Lucid**e React for beautiful icons
- **Tailwind** CSS for utility-first styling


## 📞 Contact Us
Connect with us on 
- [LinkedIn](https://www.linkedin.com/in/godwin-samuel)
- [instagram](https://www.instagram.com/godwin839/) 
