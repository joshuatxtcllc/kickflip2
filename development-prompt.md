# Development Prompt for Kickflip Studio

## Project Overview

Build a visual, no-code platform called "Kickflip Studio" that allows users to create AI-powered sales funnels without writing code. The platform should include a visual data modeler, workflow builder, conversation flow designer, and one-click deployment options.

## Core Requirements

Create a web application with the following components:

1. **Visual Data Modeling Tool**
   - Drag-and-drop interface for creating data collections
   - Visual field definitions with validation rules
   - Automatic generation of database schemas and API endpoints
   - Relationship mapping between collections

2. **Workflow Builder**
   - Canvas-based interface for designing funnel flows
   - Pre-built blocks for common operations (forms, pages, decisions)
   - Conditional logic for branching paths
   - Integration points with third-party services

3. **AI Conversation Flow Designer**
   - Visual builder for creating chat bot flows
   - Integration with OpenAI API
   - Conversation testing and simulation
   - Product recommendation configuration

4. **Deployment System**
   - One-click deployment to Netlify, Vercel, or custom domain
   - Automatic generation of necessary backend code
   - Configuration for analytics tracking
   - Performance monitoring

5. **Templates and Examples**
   - Pre-built funnel templates for common use cases
   - Industry-specific starting points
   - Customization options

## Technical Stack

- **Frontend**: React with TypeScript, Material UI for components
- **Canvas Interface**: React Flow for the workflow and conversation builders
- **Backend**: Node.js with Express, GraphQL API
- **Database**: MongoDB for flexible schema design
- **AI Integration**: OpenAI API for the conversational bot
- **Deployment**: Support for Netlify, Vercel, and custom hosting

## Project Phases

### Phase 1: Core Platform (4 weeks)
- User authentication and project management
- Basic data modeling interface
- Simple workflow builder
- Deployment to a single platform (Netlify)

### Phase 2: AI Integration (3 weeks)
- Conversation flow builder
- OpenAI integration
- Bot testing and simulation
- Product recommendation engine

### Phase 3: Advanced Features (3 weeks)
- Enhanced workflow capabilities
- Additional deployment options
- Templates library
- Third-party integrations

### Phase 4: Analytics and Optimization (2 weeks)
- Performance dashboard
- Conversion tracking
- A/B testing framework
- Optimization recommendations

## Detailed Requirements

### Visual Interface

- The interface should be intuitive enough for non-technical users
- Use drag-and-drop for all builders
- Provide real-time validation and feedback
- Include a live preview mode for testing

### Code Generation

- Generate clean, efficient code from visual definitions
- Create RESTful APIs automatically
- Handle database operations securely
- Generate optimized frontend components

### AI Integration

- Dynamically create prompts based on user configuration
- Manage conversation context effectively
- Allow product catalog integration
- Enable personalization based on user behavior

### Deployment

- Handle infrastructure setup automatically
- Configure security settings appropriately
- Set up monitoring and logging
- Enable easy updates after initial deployment

## Success Criteria

- A non-technical user can create a complete funnel in under 30 minutes
- Deployed funnels should handle at least 1,000 concurrent users
- AI conversation bot should provide relevant recommendations 80% of the time
- System should require zero manual code edits for standard funnels

## Additional Notes

- Prioritize user experience over feature complexity
- Focus on creating a stable core platform first
- Design with scalability in mind from the beginning
- Include comprehensive documentation and tooltips throughout the interface
- Create a robust error handling system with helpful feedback
- Pay special attention to security, especially regarding user data and API keys
