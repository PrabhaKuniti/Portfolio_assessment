import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    return newErrors;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      value: 'prabhakuniti@gmail.com',
      href: 'mailto:prabhakuniti@gmail.com'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: 'Phone',
      value: '91+ ************',
      href: 'tel:+15551234567'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: 'Location',
      value: 'India',
      href: 'https://maps.google.com'
    }
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-3xl shadow-2xl p-12">
              <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-slate-900 mb-4">
                Thank You!
              </h3>
              <p className="text-lg text-slate-600 mb-8">
                Your message has been sent successfully. I'll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Send Another Message
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8" />
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ready to start your next project? Let's work together to create something amazing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">
                  Let's Connect
                </h3>
                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                  I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                  or simply chat about technology and design. Don't hesitate to reach out!
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    target={info.href.startsWith('http') ? '_blank' : undefined}
                    rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="group flex items-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="flex-shrink-0 p-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl text-white group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div className="ml-6">
                      <div className="text-sm font-semibold text-slate-500 uppercase tracking-wide">
                        {info.label}
                      </div>
                      <div className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-0 transition-colors ${
                      errors.name
                        ? 'border-red-300 focus:border-red-500'
                        : 'border-slate-200 focus:border-blue-500'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <div className="flex items-center mt-2 text-red-600">
                      <AlertCircle className="w-4 h-4 mr-2" />
                      <span className="text-sm">{errors.name}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-0 transition-colors ${
                      errors.email
                        ? 'border-red-300 focus:border-red-500'
                        : 'border-slate-200 focus:border-blue-500'
                    }`}
                    placeholder="Enter your email address"
                  />
                  {errors.email && (
                    <div className="flex items-center mt-2 text-red-600">
                      <AlertCircle className="w-4 h-4 mr-2" />
                      <span className="text-sm">{errors.email}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-0 transition-colors resize-none ${
                      errors.message
                        ? 'border-red-300 focus:border-red-500'
                        : 'border-slate-200 focus:border-blue-500'
                    }`}
                    placeholder="Tell me about your project or just say hello..."
                  />
                  {errors.message && (
                    <div className="flex items-center mt-2 text-red-600">
                      <AlertCircle className="w-4 h-4 mr-2" />
                      <span className="text-sm">{errors.message}</span>
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;