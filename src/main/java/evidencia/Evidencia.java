package evidencia;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import meta.Meta;

import com.fasterxml.jackson.annotation.JsonView;
import com.siertech.stapi.crud.CrudClass;
import com.siertech.stapi.util.Views;

@Entity
@Table(name = "evidencia")
@Getter @Setter
public  class Evidencia extends CrudClass {

	@ManyToOne
	@JoinColumn(name="meta_evidencia_id")
	@JsonView(Views.Public.class)
	 private  Meta meta;


}
