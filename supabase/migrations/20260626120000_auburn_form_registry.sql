-- Auburn service area + Christopher neighborhood form registry entries.

insert into public.form_registry
  (form_id, site, form_type, page_category, page_path, page_url, description)
values
  ('MF-SA-AUBURN', 'myfence', 'contact', 'service_area_city', '/service-areas/auburn', 'https://myfence.com/service-areas/auburn', 'Auburn (service area) contact form'),
  ('MF-NB-AUBURN-CHRISTOPHER', 'myfence', 'contact', 'neighborhood', '/service-areas/auburn/christopher', 'https://myfence.com/service-areas/auburn/christopher', 'Christopher, Auburn (neighborhood) contact form')
on conflict (form_id) do update set
  site = excluded.site,
  form_type = excluded.form_type,
  page_category = excluded.page_category,
  page_path = excluded.page_path,
  page_url = excluded.page_url,
  description = excluded.description,
  updated_at = now();
