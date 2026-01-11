import React, { useState, useEffect } from 'react';
import { Plus, Layout, Mail, Send, ChevronRight, Bookmark, Eye } from 'lucide-react';
import { useNewsletterStore, type Template } from '../store/newsletterStore';

type TabType = 'newsletters' | 'templates';

const NewsletterPage = () => {
    const [activeTab, setActiveTab] = useState<TabType>('newsletters');
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState<TabType>('newsletters');
    const [showPreview, setShowPreview] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

    const {
        templates,
        newsletters,
        loading,
        fetchTemplates,
        fetchNewsletters
    } = useNewsletterStore();

    useEffect(() => {
        void fetchTemplates();
        void fetchNewsletters();
    }, [fetchTemplates, fetchNewsletters]);

    const handleCreate = () => {
        setModalType(activeTab);
        setShowModal(true);
    };

    const handlePreview = (template: Template) => {
        setSelectedTemplate(template);
        setShowPreview(true);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header Section */}
            <div className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Newsletter Management</h1>
                    <p className="text-gray-600 text-lg">Create and manage your audience communications with ease.</p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="flex justify-between items-center mb-8">
                    {/* Tab Switcher */}
                    <div className="flex gap-8 border-b">
                        <button
                            onClick={() => setActiveTab('newsletters')}
                            className={`pb-4 px-2 text-sm font-semibold transition-colors relative ${activeTab === 'newsletters' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            NEWSLETTERS
                            {activeTab === 'newsletters' && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></div>
                            )}
                        </button>
                        <button
                            onClick={() => setActiveTab('templates')}
                            className={`pb-4 px-2 text-sm font-semibold transition-colors relative ${activeTab === 'templates' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700'
                                }`}
                        >
                            TEMPLATES
                            {activeTab === 'templates' && (
                                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-900"></div>
                            )}
                        </button>
                    </div>

                    <button
                        onClick={handleCreate}
                        className="flex items-center gap-2 bg-gray-900 text-white px-6 py-2.5 rounded-lg hover:bg-gray-800 transition-all font-medium"
                    >
                        <Plus size={20} />
                        {activeTab === 'newsletters' ? 'Create Newsletter' : 'Create Template'}
                    </button>
                </div>

                {/* Content Area */}
                {loading ? (
                    <div className="flex justify-center items-center py-20">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {activeTab === 'newsletters' ? (
                            newsletters.map((newsletter) => (
                                <div key={newsletter.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all group">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-2 bg-yellow-100 rounded-lg text-yellow-700">
                                            <Send size={20} />
                                        </div>
                                        <span className="text-xs font-bold px-2 py-1 bg-gray-100 text-gray-600 rounded uppercase">
                                            {newsletter.frequency}
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-1">{newsletter.template?.name || 'Unknown Template'}</h3>
                                    <p className="text-sm text-gray-500 mb-4 flex items-center gap-1">
                                        <Mail size={14} /> Next send: {new Date(newsletter.next_send_date).toLocaleDateString()}
                                    </p>
                                    <div className="flex items-center justify-between pt-4 border-t">
                                        <span className="text-xs text-gray-400">Created {new Date(newsletter.created_at).toLocaleDateString()}</span>
                                        <button className="text-gray-400 group-hover:text-gray-900 transition-colors">
                                            <ChevronRight size={20} />
                                        </button>
                                    </div>
                                </div>
                            ))
                        ) : (
                            templates.map((template) => (
                                <div key={template.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-all group">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-2 bg-blue-100 rounded-lg text-blue-700">
                                            <Layout size={20} />
                                        </div>
                                        <button className="text-gray-300 hover:text-yellow-400 transition-colors">
                                            <Bookmark size={20} />
                                        </button>
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-1">{template.name}</h3>
                                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">{template.description}</p>
                                    <div className="flex items-center justify-between pt-4 border-t">
                                        <span className="text-xs text-gray-400">Modified {new Date(template.created_at).toLocaleDateString()}</span>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handlePreview(template)}
                                                className="p-1.5 text-gray-400 hover:text-gray-900 transition-colors bg-gray-50 rounded-lg"
                                                title="Preview Template"
                                            >
                                                <Eye size={18} />
                                            </button>
                                            <button className="text-gray-400 group-hover:text-gray-900 transition-colors">
                                                <ChevronRight size={20} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}

                        {/* Empty State */}
                        {((activeTab === 'newsletters' && newsletters.length === 0) ||
                            (activeTab === 'templates' && templates.length === 0)) && (
                                <div className="col-span-full py-20 bg-white border border-dashed border-gray-300 rounded-xl flex flex-col items-center justify-center text-center">
                                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center text-gray-400 mb-4">
                                        {activeTab === 'newsletters' ? <Send size={32} /> : <Layout size={32} />}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-1">No {activeTab} yet</h3>
                                    <p className="text-gray-500 mb-6">Start by creating your first {activeTab.slice(0, -1)}.</p>
                                    <button
                                        onClick={handleCreate}
                                        className="text-gray-900 font-bold border-b-2 border-yellow-400 hover:border-gray-900 transition-all"
                                    >
                                        Create {activeTab.slice(0, -1)}
                                    </button>
                                </div>
                            )}
                    </div>
                )}
            </div>

            {/* Modal Overlay */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
                    <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl">
                        <div className="p-8">
                            <div className="flex border-b mb-6">
                                <h2 className="text-2xl font-bold mb-4">
                                    Create {modalType === 'newsletters' ? 'Newsletter' : 'Template'}
                                </h2>
                                <button
                                    onClick={() => setShowModal(false)}
                                    className="ml-auto text-gray-400 hover:text-gray-600"
                                >
                                    ✕
                                </button>
                            </div>

                            <NewsletterForm
                                type={modalType}
                                templates={templates}
                                onSuccess={() => setShowModal(false)}
                                onCancel={() => setShowModal(false)}
                            />
                        </div>
                    </div>
                </div>
            )}
            {/* Preview Modal */}
            {showPreview && selectedTemplate && (
                <TemplatePreview
                    template={selectedTemplate}
                    onClose={() => setShowPreview(false)}
                />
            )}
        </div>
    );
};

const TemplatePreview = ({ template, onClose }: { template: Template, onClose: () => void }) => {
    const mockData = {
        user_name: "Vipul Pandey",
        cta_link: "#",
        roadmaps: [
            {
                title: "Full Stack Development",
                level: "BEGINNER",
                description: "A comprehensive guide to becoming a full stack developer from scratch.",
                link: "#"
            },
            {
                title: "Machine Learning",
                level: "ADVANCED",
                description: "Deep dive into neural networks, data science, and AI architectures.",
                link: "#"
            }
        ]
    };

    const renderTemplate = (content: string) => {
        let rendered = content;

        // Simple placeholder replacement
        rendered = rendered.replace(/{{user_name}}/g, mockData.user_name);
        rendered = rendered.replace(/{{cta_link}}/g, mockData.cta_link);

        // Handle roadmap list section (simple regex approach for mock purposes)
        const listRegex = /{{#roadmaps}}([\s\S]*?){{\/roadmaps}}/g;
        rendered = rendered.replace(listRegex, (_, innerTemplate) => {
            return mockData.roadmaps.map(roadmap => {
                let itemHtml = innerTemplate;
                itemHtml = itemHtml.replace(/{{title}}/g, roadmap.title);
                itemHtml = itemHtml.replace(/{{level}}/g, roadmap.level);
                itemHtml = itemHtml.replace(/{{description}}/g, roadmap.description);
                itemHtml = itemHtml.replace(/{{link}}/g, roadmap.link);
                return itemHtml;
            }).join('');
        });

        return rendered;
    };

    const renderedHtml = renderTemplate(template.html_content);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-[60] backdrop-blur-md">
            <div className="bg-white rounded-2xl w-full max-w-4xl h-[85vh] flex flex-col shadow-2xl overflow-hidden">
                <div className="p-4 border-b flex items-center justify-between bg-gray-50">
                    <div>
                        <h2 className="text-xl font-bold text-gray-900">Preview: {template.name}</h2>
                        <p className="text-sm text-gray-500">Visualizing with mock data</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-200 rounded-full transition-colors"
                    >
                        ✕
                    </button>
                </div>
                <div className="flex-1 overflow-auto bg-gray-100 p-8">
                    <div className="bg-white shadow-sm mx-auto max-w-[640px] rounded-lg overflow-hidden border border-gray-200">
                        <iframe
                            srcDoc={renderedHtml}
                            title="Template Preview"
                            className="w-full h-[600px] border-none"
                        />
                    </div>
                </div>
                <div className="p-4 border-t bg-gray-50 flex justify-end">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-gray-900 text-white rounded-lg font-bold hover:bg-gray-800 transition-colors"
                    >
                        Close Preview
                    </button>
                </div>
            </div>
        </div>
    );
};

const NewsletterForm = ({ type, templates, onSuccess, onCancel }: {
    type: TabType,
    templates: Template[],
    onSuccess: () => void,
    onCancel: () => void
}) => {
    const { createTemplate, createNewsletter } = useNewsletterStore();
    const [formData, setFormData] = useState<any>({
        // Template fields
        name: '',
        description: '',
        subject_template: '',
        text_template: '',
        html_content: '',
        // Newsletter fields
        template_id: '',
        frequency: 'WEEKLY',
        start_date: new Date().toISOString().split('T')[0],
        send_time: '09:00'
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        let success = false;
        if (type === 'templates') {
            success = await createTemplate(formData);
        } else {
            success = await createNewsletter(formData);
        }
        if (success) onSuccess();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {type === 'templates' ? (
                <>
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Template Name</label>
                        <input
                            required
                            className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-yellow-400 outline-none"
                            placeholder="e.g. Monthly Digest"
                            value={formData.name}
                            onChange={e => setFormData({ ...formData, name: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Description</label>
                        <textarea
                            className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-yellow-400 outline-none h-20"
                            placeholder="Brief description of the template"
                            value={formData.description}
                            onChange={e => setFormData({ ...formData, description: e.target.value })}
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Subject Line</label>
                        <input
                            required
                            className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-yellow-400 outline-none"
                            placeholder="e.g. Your Weekly Learning Update"
                            value={formData.subject_template}
                            onChange={e => setFormData({ ...formData, subject_template: e.target.value })}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Plain Text Version</label>
                            <textarea
                                required
                                className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-yellow-400 outline-none h-32"
                                value={formData.text_template}
                                onChange={e => setFormData({ ...formData, text_template: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">HTML Version</label>
                            <textarea
                                required
                                className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-yellow-400 outline-none h-32"
                                value={formData.html_content}
                                onChange={e => setFormData({ ...formData, html_content: e.target.value })}
                            />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Select Template</label>
                        <select
                            required
                            className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-yellow-400 outline-none"
                            value={formData.template_id}
                            onChange={e => setFormData({ ...formData, template_id: e.target.value })}
                        >
                            <option value="">Choose a template...</option>
                            {templates.map((t: Template) => <option key={t.id} value={t.id}>{t.name}</option>)}
                        </select>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Frequency</label>
                            <select
                                className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-yellow-400 outline-none"
                                value={formData.frequency}
                                onChange={e => setFormData({ ...formData, frequency: e.target.value })}
                            >
                                <option value="DAILY">Daily</option>
                                <option value="WEEKLY">Weekly</option>
                                <option value="MONTHLY">Monthly</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Start Date</label>
                            <input
                                type="date"
                                required
                                className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-yellow-400 outline-none"
                                value={formData.start_date}
                                onChange={e => setFormData({ ...formData, start_date: e.target.value })}
                            />
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Preferred Time</label>
                        <input
                            type="time"
                            required
                            className="w-full border rounded-lg p-2.5 focus:ring-2 focus:ring-yellow-400 outline-none"
                            value={formData.send_time}
                            onChange={e => setFormData({ ...formData, send_time: e.target.value })}
                        />
                    </div>
                </>
            )}
            <div className="flex gap-3 pt-6">
                <button
                    type="button"
                    onClick={onCancel}
                    className="flex-1 px-6 py-3 border rounded-lg hover:bg-gray-50 font-bold"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 font-bold transition-all"
                >
                    {type === 'newsletters' ? 'Launch Newsletter' : 'Save Template'}
                </button>
            </div>
        </form>
    );
};

export default NewsletterPage;
