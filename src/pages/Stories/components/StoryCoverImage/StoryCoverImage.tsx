import React from "react";

export const StoryCoverImage = ({ title, picture }: { title: string, picture?: string }) => {
  if (picture) {
    return (
      <div style={{ height: '200px', overflow: 'hidden', background: '#333', border: '1px solid #f0f0f0' }}>
        <img style={{ width: '100%', objectFit: 'cover', height: '200px' }} alt={title} src={picture} />
      </div>
    )
  };

  return (
    <div style={{ height: '200px', overflow: 'hidden', background: '#fff', border: '1px solid #f0f0f0' }}>
      <img style={{
        display: 'block', width: 'auto', height: '100%', margin: 'auto'
      }} alt={title} src='https://ggonline.kz/local/templates/main_template/images/crash_photo.jpeg' />
    </div>
  )
};
