package diarioemocional;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import lombok.Getter;
import lombok.Setter;

import com.fasterxml.jackson.annotation.JsonView;
import com.siertech.stapi.crud.CrudClass;
import com.siertech.stapi.util.Views;

@Entity
@Table(name = "diarioemocional")
@Getter @Setter
public  class DiarioEmocional extends CrudClass {
	
	@JsonView(Views.Public.class)
	@Temporal(TemporalType.TIMESTAMP)
	private Date hora;

	@JsonView(Views.Public.class)
	private String submitedDate;
	
	@JsonView(Views.Public.class)
	private String value;
	
	
}
