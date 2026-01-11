INSERT INTO public.newsletter_templates (
  name,
  description,
  subject_template,
  text_template,
  html_content,
  template_variables,
  is_active
) VALUES (
  'New Developer Roadmaps Release',
  'Announcement email for newly released developer roadmaps with detailed descriptions',
  '🚀 New Developer Roadmaps Are Live – Start Your Learning Journey!',
  
  -- TEXT VERSION (fallback)
  'Hi {{user_name}},

We have released new developer roadmaps to help you learn faster and smarter.

{{#roadmaps}}
- {{title}} ({{level}})
  {{description}}
  View: {{link}}

{{/roadmaps}}

Start learning today:
{{cta_link}}

Happy Learning!
Team Developer Roadmaps',

  -- HTML VERSION
  '
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Developer Roadmaps</title>
</head>
<body style="margin:0;padding:0;background:#f5f7fb;font-family:Inter,Segoe UI,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:40px 16px;">
        <table width="640" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,0.06);overflow:hidden;">

          <!-- HEADER -->
          <tr>
            <td style="padding:32px;text-align:center;">
              <h1 style="margin:0;font-size:28px;color:#0f172a;">
                Developer Roadmaps 🚀
              </h1>
              <p style="margin:12px 0 0;font-size:16px;color:#64748b;">
                Unlock your full potential with our latest learning paths
              </p>
            </td>
          </tr>

          <!-- CONTENT -->
          <tr>
            <td style="padding:24px 32px;">
              <p style="font-size:16px;color:#334155;">
                Hi <strong>{{user_name}}</strong>,
              </p>

              <p style="font-size:16px;color:#334155;">
                We have launched <strong>new and updated developer roadmaps</strong> designed to guide you step-by-step from fundamentals to mastery.
              </p>

              <!-- ROADMAP LIST -->
              {{#roadmaps}}
              <div style="border:1px solid #e5e7eb;border-radius:10px;padding:16px;margin-bottom:16px;">
                <h3 style="margin:0;font-size:18px;color:#0f172a;">
                  {{title}}
                </h3>
                <p style="margin:6px 0;font-size:14px;color:#475569;">
                  {{description}}
                </p>
                <span style="display:inline-block;margin-top:8px;font-size:12px;padding:4px 10px;border-radius:999px;background:#eef2ff;color:#3730a3;">
                  {{level}}
                </span>
                <div style="margin-top:12px;">
                  <a href="{{link}}" style="font-size:14px;color:#2563eb;text-decoration:none;font-weight:600;">
                    View Roadmap →
                  </a>
                </div>
              </div>
              {{/roadmaps}}

              <!-- CTA -->
              <div style="text-align:center;margin-top:32px;">
                <a href="{{cta_link}}" style="background:#0f172a;color:#ffffff;padding:14px 28px;border-radius:10px;text-decoration:none;font-size:16px;font-weight:600;">
                  Get Started
                </a>
              </div>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="padding:24px;text-align:center;background:#f8fafc;">
              <p style="margin:0;font-size:13px;color:#64748b;">
                You’re receiving this because you subscribed to Developer Roadmaps.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  ',
  
  '{"user_name":"string","roadmaps":"array","cta_link":"string"}',
  TRUE
);
