/**
 * ChatbotGenerator.js
 * 
 * This service generates the necessary code and configuration for AI-powered
 * chatbots based on the conversation flow designed in Kickflip Studio.
 */

const fs = require('fs').promises;
const path = require('path');
const { OpenAI } = require('openai');
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

class ChatbotGenerator {
  constructor(project) {
    this.project = project;
    this.outputDir = path.join(__dirname, '../../generated', project._id.toString(), 'chatbot');
    this.promptsDir = path.join(this.outputDir, 'prompts');
    this.handlersDir = path.join(this.outputDir, 'handlers');
  }

  /**
   * Generate all files needed for the chatbot implementation
   */
  async generateAll() {
    try {
      // Create output directories
      await this.createDirectories();
      
      // Generate prompt templates
      await this.generatePromptTemplates();
      
      // Generate conversation flow handlers
      await this.generateConversationHandlers();
      
      // Generate main chatbot controller
      await this.generateChatbotController();
      
      // Generate frontend chat widget
      await this.generateChatWidget();
      
      // Generate README
      await this.generateREADME();
      
      return {
        success: true,
        outputDir: this.outputDir
      };
    } catch (error) {
      console.error('Error generating chatbot code:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Create output directories
   */
  async createDirectories() {
    const dirs = [
      this.outputDir,
      this.promptsDir,
      this.handlersDir
    ];
    
    for (const dir of dirs) {
      try {
        await fs.mkdir(dir, { recursive: true });
      } catch (error) {
        if (error.code !== 'E/**
 * ChatbotGenerator.js
 * 
 * This service generates the necessary code and configuration for AI-powered
 * chatbots based on the conversation flow designed in Kickflip Studio.
 */

const fs = require('fs').promises;
const path = require('path');
const { OpenAI } = require('openai');
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

class ChatbotGenerator {
  constructor(project) {
    this.project = project;
    this.outputDir = path.join(__dirname, '../../generated', project._id.toString(), 'chatbot');
    this.promptsDir = path.join(this.outputDir, 'prompts');
    this.handlersDir = path.join(this.outputDir, 'handlers');
  }

  /**
   * Generate all files needed for the chatbot implementation
   */
  async generateAll() {
    try {
      // Create output directories
      await this.createDirectories();
      
      // Generate prompt templates
      await this.generatePromptTemplates();
      
      // Generate conversation flow handlers
      await this.generateConversationHandlers();
      
      // Generate main chatbot controller
      await this.generateChatbotController();
      
      // Generate frontend chat widget
      await this.generateChatWidget();
      
      // Generate README
      await this.generateREADME();
      
      return {
        success: true,
        outputDir: this.outputDir
      };
    } catch (error) {
      console.error('Error generating chatbot code:', error);
      return {
        success: false,
        error: error.message
      };
    }
  }

  /**
   * Create output directories
   */
  async createDirectories() {
    const dirs = [
      this.outputDir,
      this.promptsDir,
      this.handlersDir
    ];
    
    for (const dir of dirs) {
      try {
        await fs.mkdir(dir, { recursive: true });
      } catch (error) {
        if (error.code !== 'EEXIST') {
          throw error;
        }
      }
    }
  }

  /**
   * Generate prompt templates for different conversation scenarios
   */
  async generatePromptTemplates() {
    // If no conversation flow is defined, use default templates
    if (!this.project.conversation || !this.project.conversation.nodes) {
      await this.generateDefaultPromptTemplates();
      return;
    }
    
    // Extract bot configuration
    const botConfig = this.project.conversation.botConfig || {
      name: 'Shopping Assistant',
      personality: 'friendly',
      responseLength: 1,
      technicalLevel: 1,
      persuasiveLevel: 2,
      offerTiming: 'balanced',
      knowledgeBase: ['products', 'pricing', 'shipping', 'returns']
    };
    
    // Generate base system prompt
    const basePrompt = this.generateBaseSystemPrompt(botConfig);
    
    // Write base prompt to file
    await fs.writeFile(
      path.join(this.promptsDir, 'base_system_prompt.txt'),
      basePrompt
    );
    
    // Generate specialized prompts
    const specializedPrompts = {
      welcome: this.generateWelcomePrompt(botConfig),
      product_recommendation: this.generateProductRecommendationPrompt(botConfig),
      objection_handling: this.generateObjectionHandlingPrompt(botConfig),
      checkout: this.generateCheckoutPrompt(botConfig)
    };
    
    // Write specialized prompts to files
    for (const [name, prompt] of Object.entries(specializedPrompts)) {
      await fs.writeFile(
        path.join(this.promptsDir, `${name}_prompt.txt`),
        prompt
      );
    }
    
    // Generate intent classification prompt
    const intentPrompt = this.generateIntentClassificationPrompt();
    await fs.writeFile(
      path.join(this.promptsDir, 'intent_classification_prompt.txt'),
      intentPrompt
    );
  }

  /**
   * Generate default prompt templates when no conversation flow is defined
   */
  async generateDefaultPromptTemplates() {
    const defaultPrompts = {
      base_system_prompt: `You are a helpful shopping assistant for an e-commerce store. Your goal is to help customers find products, answer their questions, and guide them through the purchasing process. Be friendly, helpful, and concise in your responses.`,
      
      welcome_prompt: `Greet the customer warmly and ask how you can help them today. Keep your response brief and friendly.`,
      
      product_recommendation_prompt: `Recommend products based on the customer's stated preferences. Focus on the key benefits that match their needs. Limit your recommendations to 3 products maximum.`,
      
      objection_handling_prompt: `Address any concerns or objections the customer raises about products or the purchase process. Be empathetic and provide helpful information to overcome their concerns.`,
      
      checkout_prompt: `Guide the customer through the checkout process. Explain any available options clearly and encourage them to complete their purchase.`,
      
      intent_classification_prompt: `Analyze the customer message and identify their primary intent from the following categories:
- greeting: Customer is saying hello or starting the conversation
- product_inquiry: Customer is
