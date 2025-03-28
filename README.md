
# FLOAT.K8s - Playful Hallucination Canvas

## Project Overview

FLOAT.K8s is an interactive visualization framework designed to explore the evolution from chaotic play to structured systems, with a focus on meta-meta cognition. This project serves as a canvas for visualizing recursive thought patterns and managing cognitive overwhelm through playful interactions.

The application represents a personal framework for structuring thoughts, inspired by Kubernetes architecture but applied to cognitive processes. It visualizes nodes of concepts that orbit around a central theme, allowing users to explore different aspects of meta-cognitive structures.

## Project info

**URL**: https://lovable.dev/projects/28207199-c6d3-4596-81fc-aaba0a2fd0dd

## Architecture

The project is built with a modular component architecture:

### Core Components

- **FloatCanvas**: The main container that orchestrates all visualization elements
- **MawOrbit**: Handles the circular node layout and orbital visualization
- **CosmicBackdrop**: Provides atmospheric background elements
- **NodeDetailDialog**: Modal component for displaying detailed node information
- **ThoughtEchoes**: Visualizes thought bubbles with contextual tags
- **RitualFilter**: A symbolic component for future filtering capabilities

### State Management

- **useMawStore**: Zustand store for managing application state
- Core state includes: selected node, drift mode toggle, and thought bubbles

### Data Structure

- **FloatNode**: Typed structure for concept nodes with hierarchical relationships
- Supports attributes and sub-nodes to represent complex thought patterns

## Philosophy

FLOAT.K8s represents a personal framework for:
- Managing meta-meta cognitive processes
- Exploring recursive thought patterns
- Providing structure to chaotic cognitive experiences
- Creating playful interactions with symbolic tenderness

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/28207199-c6d3-4596-81fc-aaba0a2fd0dd) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS
- Zustand for state management

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/28207199-c6d3-4596-81fc-aaba0a2fd0dd) and click on Share -> Publish.

## I want to use a custom domain - is that possible?

We don't support custom domains (yet). If you want to deploy your project under your own domain then we recommend using Netlify. Visit our docs for more details: [Custom domains](https://docs.lovable.dev/tips-tricks/custom-domain/)
